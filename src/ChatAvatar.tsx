type ChatAvatarProps = {
  alt?: string
  src?: string
}

export const ChatAvatar = ({ alt, src }: ChatAvatarProps) => (
  <span className="Avatar Avatar--md Avatar--square">
    {src && <img alt={alt ?? ''} src={src} />}
  </span>
)
