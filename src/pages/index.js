import React from "react"
import "./styles.scss"
import "../../node_modules/bulma/"
import {Link} from 'gatsby'

import Hero from '../partials/hero';
import Divider from '../components/divider';

export default () => (
  <React.Fragment>
    <Hero />
    <section id="food-section" className="container is-fluid">
      <Divider size={20} />
      <h1 className="is-size-1">Mat</h1>
      <div style={{height: 1000, width: "100%"}}/>
    </section>
  </React.Fragment>
)
