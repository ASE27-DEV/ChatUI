'use client'

import React, { useCallback, useEffect, useRef } from 'react'

import { ChatMessage } from './ChatMessage'
import { MessageProps } from './types'

type ChatMessageListProps = {
  messages: MessageProps[]
  renderMessageContent: (msg: MessageProps) => React.ReactNode
}

export const ChatMessageList = ({
  messages,
  renderMessageContent,
}: ChatMessageListProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const isNearBottomRef = useRef(true)

  const scrollToBottom = useCallback((force = false) => {
    if (!force && !isNearBottomRef.current) return
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const handleScroll = () => {
      const distanceFromBottom =
        el.scrollHeight - el.scrollTop - el.clientHeight
      isNearBottomRef.current = distanceFromBottom < el.clientHeight * 0.5
    }
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  const lastMsg = messages[messages.length - 1]
  useEffect(() => {
    if (!lastMsg) return
    scrollToBottom(lastMsg.position === 'right')
  }, [lastMsg, scrollToBottom])

  return (
    <div className="MessageContainer">
      <div className="PullToRefresh" ref={scrollerRef}>
        <div className="MessageList">
          {messages.map((msg) => (
            <ChatMessage
              key={msg._id}
              msg={msg}
              renderMessageContent={renderMessageContent}
            />
          ))}
          <div aria-hidden="true" ref={bottomRef} />
        </div>
      </div>
    </div>
  )
}
