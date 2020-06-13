import React from 'react'

export default () => (
  <div className="columns">
    <div className="column">
      <div id="menu-picture" className="picture-rounded" />
    </div>
    <div className="column">
      <p className="p-5">På Restaurang il Contadino serverar vi rätter med autentiska smaker gjorda av noggrant utvalda färska ingredienser, modern matlagningsteknik och kortlivad hantverk. Genom att kombinera den unika mat- och dryckupplevelsen med en varm och personlig service vill vi bjuda in dig till oförglömliga, inspirerande och avkopplande möten, människor och mat.</p>
      <div className="food-menu-body pt-15">
        <a className="p-5" target="blank" href="drinks_menu.png">Dryck</a>
        <a className="p-5" target="blank" href="pizza_menu.png">Pizza</a>
        <a className="p-5" target="blank" href="meny_menu.png">Mat</a>
      </div>
    </div>
  </div>
)