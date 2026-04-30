import { NavbarConfig } from './types'

export const ChatNavbar = ({ align, desc, logo, rightSlot, title }: NavbarConfig) => (
  <header className={`Navbar${align ? ` Navbar--${align}` : ''}`}>
    <div className="Navbar-main">
      {logo && (
        <div className="Navbar-brand">
          <img alt={title} className="Navbar-logo" src={logo} />
        </div>
      )}
      <div className="Navbar-inner">
        {title && <h2 className="Navbar-title">{title}</h2>}
        {desc && <div className="Navbar-desc">{desc}</div>}
      </div>
    </div>
    {rightSlot && <div className="Navbar-right">{rightSlot}</div>}
  </header>
)
