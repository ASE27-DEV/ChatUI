'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

type ChatInputProps = {
  onSend: (type: string, val: string) => void
  placeholder?: string
}

export const ChatInput = ({ onSend, placeholder = '...' }: ChatInputProps) => {
  const [text, setText] = useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const hasValue = text.trim().length > 0

  const send = useCallback(() => {
    const val = text.trim()
    if (!val) return
    onSend('text', val)
    setText('')
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'
    }
  }, [onSend, text])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = e.target
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
    setText(el.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  useEffect(() => {
    const viewport = window.visualViewport
    if (!viewport) return
    const handleResize = () => {
      inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
    viewport.addEventListener('resize', handleResize)
    return () => viewport.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="ChatFooter">
      <div className="Composer" data-has-value={hasValue}>
        <div className="Composer-inputWrap">
          <textarea
            className="Composer-input"
            placeholder={placeholder}
            ref={inputRef}
            rows={1}
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            {...({ enterKeyHint: 'send' } as object)}
          />
        </div>
        {hasValue && (
          <div className="Composer-actions">
            <button
              className="Composer-sendBtn"
              type="button"
              onMouseDown={(e) => {
                e.preventDefault()
                send()
              }}
            >
              Envoyer
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
