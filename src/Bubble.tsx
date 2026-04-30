import React from 'react'

type BubbleProps = {
  children?: React.ReactNode
  content?: string
  type?: string
} & React.HTMLAttributes<HTMLDivElement>

export const Bubble = React.forwardRef<HTMLDivElement, BubbleProps>(
  ({ children, content, type = 'text', ...rest }, ref) => (
    <div className={`Bubble ${type}`} data-type={type} ref={ref} {...rest}>
      {content && <p>{content}</p>}
      {children}
    </div>
  ),
)

Bubble.displayName = 'Bubble'
