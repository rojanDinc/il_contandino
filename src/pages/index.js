import React from "react"
import "./styles.scss"
import "../../node_modules/bulma/"

import Hero from '../partials/hero'
import Card from '../components/card'
import FoodMenu from '../partials/food-menu'
import Divider from '../components/divider'
import ContactInfoLabel from '../components/contact-info-label'
import Form from '../components/form'

export default () => (
  <React.Fragment>
    <Hero />
    {/* Food */}
    <section id="food-section" className="container is-fluid">
      <h2 className="is-size-1 has-text-weight-bold mb-20 pt-40 has-text-centered special-title">Mat</h2>
      <div className="columns">
        <div className="column">
          <Card
            imageSrc="https://via.placeholder.com/450"
            imageAlt="placeholder"
            title="Bar"
          >
            <p>Paragraph</p>
          </Card>
        </div>
        <div className="column">
          <Card
            imageSrc="https://via.placeholder.com/450"
            imageAlt="placeholder"
            title="Pizza"
          >
            <p>Paragraph</p>
          </Card>
        </div>
        <div className="column">
          <Card
            imageSrc="https://via.placeholder.com/450"
            imageAlt="placeholder"
            title="Pasta"
          >
            <p>Paragraph</p>
          </Card>
        </div>
        <div className="column">
          <Card
            imageSrc="https://via.placeholder.com/450"
            imageAlt="placeholder"
            title="Grill"
          >
            <p>Paragraph</p>
          </Card>
        </div>
      </div>
    </section>
    <Divider size={60}/>
    {/* END Food */}
    {/* Meny */}
    <section id="menu-section" className="container is-fluid">
      <h2 className="is-size-1 has-text-weight-bold mb-20 pt-40 has-text-centered special-title">Meny</h2>
      <FoodMenu />
    </section>
    {/* END Meny */}
    <Divider size={60}/>
    {/* About */}
    <section className="container is-fluid">
      <h2 className="is-size-1 has-text-weight-bold mb-20 pt-40 has-text-centered special-title">Om oss</h2>
      <div className="columns">
        <div className="column">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit quam, condimentum vitae ornare at, blandit sed neque. Aenean bibendum ante id tempus tristique. Maecenas lacinia ante id tristique porta. Vestibulum laoreet at leo eget dapibus. Aliquam feugiat metus risus, eu rutrum ligula rhoncus at. Donec semper, tellus id porttitor lobortis, lorem libero lacinia augue, ac vulputate orci lorem et libero. Donec imperdiet dolor at risus viverra dictum. Praesent varius finibus mauris, vitae molestie nulla pharetra nec. Aenean lacinia eget nisi et fringilla.</p>
        </div>
        <div className="column">
          <div id="about-picture" />
        </div>
      </div>
    </section>
    <Divider size={60}/>
    {/* END About */}
    {/* Contact */}
    <section className="container is-fluid">
      <h2 className="is-size-1 has-text-weight-bold mb-20 pt-40 has-text-centered special-title">Kontakt</h2>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039.6183991347002!2d18.07998571633953!3d59.25581688163315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f79c05664d3cd%3A0x3033ce8faec8582b!2sil%20Contadino!5e0!3m2!1sen!2sse!4v1591128936520!5m2!1sen!2sse" 
        height="350" 
        frameborder="0" 
        style={{border: "0", width: "100%"}} 
        allowfullscreen="" 
        aria-hidden="false" 
        tabindex="0"
      ></iframe>
      <div className="columns">
        <div className="column">
          <h4 className="is-size-3 has-text-weight-bold pt-25 mb-20 has-text-centered special-title">Info</h4>
          <ContactInfoLabel label="Adress" labelDescription="Sirapsvägen 6, 123 56 Farsta"/>
          <ContactInfoLabel label="Telefon" labelDescription="08-604 80 07"/>
          <ContactInfoLabel label="E-mail" labelDescription="info@ilcontadino.se"/>
        </div>
        <div className="column">
          <h4 className="is-size-3 has-text-weight-bold pt-25 mb-20 has-text-centered special-title">Meddelande</h4>
          <Form />
        </div>
      </div>
    </section>
    {/* END Contact */}
    <footer class="footer">
      <div class="content has-text-centered">
        <p><strong>Il Contadino</strong> by <a href="https://dincit.se">Dincit</a></p>
      </div>
    </footer>
  </React.Fragment>
)
