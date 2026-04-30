'use client'

import React from 'react'

import { ChatInput } from './ChatInput'
import { ChatMessageList } from './ChatMessageList'
import { ChatNavbar } from './ChatNavbar'
import { ChatProps, ChatTheme } from './types'

import './Chat.scss'

const THEME_CSS_VARS: Record<keyof ChatTheme, string> = {
  bubbleBg: '--chat-bubble-bg',
  bubbleRadius: '--chat-bubble-radius',
  bubbleUserBg: '--chat-bubble-user-bg',
  footerBg: '--chat-footer-bg',
  inputColor: '--chat-input-color',
  inputPlaceholderColor: '--chat-input-placeholder-color',
  messageListBg: '--chat-message-list-bg',
  messageMetaColor: '--chat-message-meta-color',
  navbarBg: '--chat-navbar-bg',
  navbarColor: '--chat-navbar-color',
  sendBtnBg: '--chat-send-btn-bg',
  sendBtnColor: '--chat-send-btn-color',
  sendBtnRadius: '--chat-send-btn-radius',
}

function buildThemeStyle(theme?: ChatTheme): React.CSSProperties {
  if (!theme) return {}
  return Object.entries(theme).reduce<Record<string, string>>(
    (acc, [key, value]) => {
      if (value !== undefined) acc[THEME_CSS_VARS[key as keyof ChatTheme]] = value
      return acc
    },
    {},
  ) as React.CSSProperties
}

const Chat = React.forwardRef<HTMLDivElement, ChatProps>(
  ({ messages, navbar, onSend, placeholder, renderMessageContent, theme }, ref) => (
    <div className="Chat" ref={ref} style={buildThemeStyle(theme)}>
      <div className="ChatApp">
        {navbar && <ChatNavbar {...navbar} />}
        <ChatMessageList
          messages={messages}
          renderMessageContent={renderMessageContent}
        />
        <ChatInput placeholder={placeholder} onSend={onSend} />
      </div>
    </div>
  ),
)

Chat.displayName = 'Chat'

export default Chat
