import React from "react"
import { Link } from "gatsby"

export default () => (
  <React.Fragment>
    <Link to="/" className="navbar-item" activeClassName="is-active">
      Hem
    </Link>
    <Link to="/ab" className="navbar-item" activeClassName="is-active">
      Meny
    </Link>
    <Link to="/ab" className="navbar-item" activeClassName="is-active">
      Om oss
    </Link>
    <Link to="/ds" className="navbar-item" activeClassName="is-active">
      Kontakt
    </Link>
  </React.Fragment>
)