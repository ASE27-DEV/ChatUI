import React from 'react'

import { ChatAvatar } from './ChatAvatar'
import { MessageProps } from './types'

type ChatMessageProps = {
  msg: MessageProps
  renderMessageContent: (msg: MessageProps) => React.ReactNode
}

export const ChatMessage = ({ msg, renderMessageContent }: ChatMessageProps) => {
  const { _id, createdAt, hasTime, position = 'left', type, user = {} } = msg
  const isRL = position === 'right' || position === 'left'

  return (
    <div className={`Message ${position}`} data-id={_id} data-type={type}>
      {hasTime && createdAt && (
        <div className="Message-meta">
          <time dateTime={new Date(createdAt).toISOString()}>
            {new Date(createdAt).toLocaleTimeString('fr-FR', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </time>
        </div>
      )}
      <div className="Message-main">
        {isRL && user.avatar && (
          <ChatAvatar alt={user.avatarAlt} src={user.avatar} />
        )}
        <div className="Message-inner">
          <div
            aria-atomic="false"
            aria-live="assertive"
            className="Message-content"
            role="alert"
          >
            {renderMessageContent(msg)}
          </div>
        </div>
      </div>
    </div>
  )
}
