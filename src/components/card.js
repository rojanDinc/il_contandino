import React from 'react'

export default ({imageSrc, imageAlt, title, children}) => (
  <div class="card">
    {imageSrc !== undefined && (
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={imageSrc} alt={imageAlt}/>
        </figure>
      </div>
    )}
    <div class="card-content">
      <h4 className="is-size-4">{title}</h4>
      <div class="content">
        {children}
      </div>
    </div>
  </div>
)