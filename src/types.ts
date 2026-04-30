import type { ReactNode } from 'react'

export type MessageUser = {
  avatar?: string
  avatarAlt?: string
  url?: string
}

export type MessageContent = {
  text?: string
  items?: any[]
}

export type MessagePosition = 'left' | 'right' | 'center' | 'pop'

export type MessageProps = {
  _id?: string
  type: string
  position?: MessagePosition
  user?: MessageUser
  content?: MessageContent
  createdAt?: number
  hasTime?: boolean
}

export type NavbarConfig = {
  align?: 'center' | 'left' | 'right'
  desc?: string
  logo?: string
  rightSlot?: ReactNode
  title?: string
}

export type ChatTheme = {
  bubbleBg?: string
  bubbleRadius?: string
  bubbleUserBg?: string
  footerBg?: string
  inputColor?: string
  inputPlaceholderColor?: string
  messageListBg?: string
  messageMetaColor?: string
  navbarBg?: string
  navbarColor?: string
  sendBtnBg?: string
  sendBtnColor?: string
  sendBtnRadius?: string
}

export type ChatProps = {
  locale?: string
  messages: MessageProps[]
  navbar?: NavbarConfig
  onSend: (type: string, val: string) => void
  placeholder?: string
  renderMessageContent: (msg: MessageProps) => ReactNode
  theme?: ChatTheme
}
