import React, { useState } from "react"
import NavLinks from '../partials/nav-links'

export default () => {
  const [burgerOpen, setBurgerOpen] = useState(false)

  const onToggle = () => setBurgerOpen(!burgerOpen)

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
        </a>

        <a role="button" className={`navbar-burger burger ${burgerOpen && 'is-active'}`} onClick={onToggle} aria-label="menu" aria-expanded="false"
           data-target="navbarBasicExample">
          <span aria-hidden="true" className="burger-line"></span>
          <span aria-hidden="true" className="burger-line"></span>
          <span aria-hidden="true" className="burger-line"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${burgerOpen && 'is-active'}`}>
        <div className="navbar-start">
          <NavLinks />
        </div>
      </div>
    </nav>
  )
}