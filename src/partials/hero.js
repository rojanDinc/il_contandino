import React, { useEffect, useState } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from "@fortawesome/free-solid-svg-icons"
import NavLinks from '../partials/nav-links'

export default () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false)
  const [isNavbarTransparent, setNavbarTransparent] = useState(true)

  const CHEVRON_ICON_SIZE = 30

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onScroll = () => {
    const offset = document.body.scrollTop || document.documentElement.scrollTop
    if (offset > 10) {
      setNavbarTransparent(false)
    } else {
      setNavbarTransparent(true)
    }
  }

  const onToggle = () => setBurgerOpen(!isBurgerOpen)

  return (
    <section className="hero is-fullheight">
      <div className="hero-head">
        <header className="navbar is-fixed-top" style={{backgroundColor: `${isNavbarTransparent? 'transparent': 'white'}`}}>
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
              </a>
              <span className={`navbar-burger burger ${isBurgerOpen && 'is-active'}`} onClick={onToggle} data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
            </div>
            <div id="navbarMenuHeroC" className={`navbar-menu ${isBurgerOpen && 'is-active'}`}>
              <div className="navbar-end">
                <NavLinks isNavbarTransparent={isNavbarTransparent} />
              </div>
            </div>
          </div>
        </header>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title has-text-white has-text-weight-bold is-size-1 special-title">
            Il contadino
          </h1>
          <h2 className="subtitle has-text-white is-size-4">
            Restaurang i Hökarängen
          </h2>
        </div>
      </div>

      <a onClick={() => {
        const element = document.getElementById('food-section')
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }}>
        <div className="arrow-down">
          <FontAwesomeIcon
            className="has-text-white"
            style={{width: CHEVRON_ICON_SIZE, height: CHEVRON_ICON_SIZE}}
            icon={faChevronDown}
          />
        </div>
      </a>
    </section>
  )
}