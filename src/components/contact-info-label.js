import React from 'react'

export default (props) => (
  <div>
    <p><span className="contact-info-label">{props.label}</span>: {props.labelDescription}</p>
  </div>
)