import React from "react"
import { Link } from "gatsby"

export default (props) => (
  <React.Fragment>
    <Link 
      to="/" 
      className={`navbar-item ${props.isNavbarTransparent ? "has-text-white": ""}`}
      activeClassName="is-active"
    >
      Hem
    </Link>
    <Link 
      to="/ab" 
      className={`navbar-item ${props.isNavbarTransparent ? "has-text-white": ""}`}
      activeClassName="is-active"
    >
      Mat
    </Link>
    <Link 
      to="/ab" 
      className={`navbar-item ${props.isNavbarTransparent ? "has-text-white": ""}`}
      activeClassName="is-active"
    >
      Meny
    </Link>
    <Link 
      to="/ab" 
      className={`navbar-item ${props.isNavbarTransparent ? "has-text-white": ""}`}
      activeClassName="is-active"
    >
      Om oss
    </Link>
    <Link 
      to="/ds" 
      className={`navbar-item ${props.isNavbarTransparent ? "has-text-white": ""}`}
      activeClassName="is-active"
    >
      Kontakt
    </Link>
  </React.Fragment>
)