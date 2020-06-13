import React from "react"
import scrollTo from 'gatsby-plugin-smoothscroll'

export default (props) => (
  <React.Fragment>
    <a
      className={`navbar-item ${props.isNavbarTransparent ? "has-text-white": ""}`}
      onClick={() => window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })}
    >
      Hem
    </a>
    <a
      className={`navbar-item ${props.isNavbarTransparent ? "has-text-white": ""}`}
      onClick={() => scrollTo("#food-section")}
    >
      Mat
    </a>
    <a
      className={`navbar-item ${props.isNavbarTransparent ? "has-text-white": ""}`}
      onClick={() => scrollTo("#menu-section")}
    >
      Meny
    </a>
    {/* <a
      className={`navbar-item ${props.isNavbarTransparent ? "has-text-white": ""}`}
      onClick={() => scrollTo("#about-section")}
    >
      Om oss
    </a> */}
    <a 
      className={`navbar-item ${props.isNavbarTransparent ? "has-text-white": ""}`}
      onClick={() => scrollTo("#contact-section")}
    >
      Kontakt
    </a>
  </React.Fragment>
)
