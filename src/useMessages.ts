import { useCallback, useState } from 'react'

import { MessageProps } from './types'

let counter = 0
const genId = () => `msg-${Date.now()}-${++counter}`

const TIME_GAP = 5 * 60 * 1000
let lastTs = 0

function makeMsg(msg: MessageProps): MessageProps {
  const ts = msg.createdAt ?? Date.now()
  const hasTime = msg.hasTime ?? ts - lastTs > TIME_GAP
  if (hasTime) lastTs = ts
  return {
    ...msg,
    _id: msg._id ?? genId(),
    createdAt: ts,
    hasTime,
    position: msg.position ?? 'left',
  }
}

export function useMessages(initialState: MessageProps[] = []) {
  const [messages, setMessages] = useState<MessageProps[]>(() =>
    initialState.map(makeMsg),
  )

  const appendMsg = useCallback((msg: MessageProps) => {
    const newMsg = makeMsg(msg)
    setMessages((prev) => [...prev, newMsg])
    return newMsg._id!
  }, [])

  const prependMsgs = useCallback((msgs: MessageProps[]) => {
    setMessages((prev) => [...msgs.map(makeMsg), ...prev])
  }, [])

  const updateMsg = useCallback((id: string, msg: MessageProps) => {
    setMessages((prev) =>
      prev.map((m) => (m._id === id ? makeMsg({ ...msg, _id: id }) : m)),
    )
  }, [])

  const deleteMsg = useCallback((id: string) => {
    setMessages((prev) => prev.filter((m) => m._id !== id))
  }, [])

  const resetList = useCallback((list: MessageProps[] = []) => {
    setMessages(list)
  }, [])

  return { appendMsg, deleteMsg, messages, prependMsgs, resetList, updateMsg }
}
