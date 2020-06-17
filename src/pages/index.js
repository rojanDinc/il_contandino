import 'typeface-satisfy'
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
    <section id="food-section">
      <div className="container">
        <h2 className="is-size-1 has-text-weight-bold mb-20 pt-40 has-custom-font has-text-centered">Mat</h2>
        <div className="columns">
          <div className="column">
            <Card
              imageSrc="hanging_glasses_full.jpg"
              imageAlt="placeholder"
              title="Bar"
            >
              <p>Vår bar består av viner, likörer, öl och blandade drinkar från olika delar i världen.</p>
            </Card>
          </div>
          <div className="column">
            <Card
              imageSrc="pizza_olives_full.jpg"
              imageAlt="placeholder"
              title="Pizza"
            >
              <p>Våra pizzor kommer ut från ugnen med himmelsk doftande smält pizzaost med vår hemlagade tomatsås.</p>
            </Card>
          </div>
          <div className="column">
            <Card
              imageSrc="meat_pasta_full.jpg"
              imageAlt="placeholder"
              title="Pasta"
            >
              <p>Vi har ett brett urval av pastarätter utformade för att tillmötesgå alla preferenser.</p>
            </Card>
          </div>
          <div className="column">
            <Card
              imageSrc="stake_dinner_full.jpg"
              imageAlt="placeholder"
              title="Kött"
            >
              <p>Vi grillar allt från oxfilé till fläsk och serverar våra rätter med en sund sallad och en ljuvlig sås.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <Divider size={60}/>
    {/* END Food */}
    {/* Meny */}
    <section id="menu-section">
      <div className="container">
        <h2 className="is-size-1 has-text-weight-bold mb-20 pt-40 has-custom-font has-text-centered animate__animated animate__fadeIn">Meny</h2>
        <FoodMenu />
      </div>
    </section>
    {/* END Meny */}
    <Divider size={60}/>
    {/* About */}
    {/* <section id="about-section">
      <div className="container">
        <h2 className="is-size-1 has-text-weight-bold mb-20 pt-40 has-custom-font has-text-centered">Om oss</h2>
        <div className="columns reverse-column">
          <div className="column is-half is-offset-one-quarter">
            <p className="has-text-centered">I hjärtat av Hökarängen hittar du il Contadino. Hos oss är det helt normalt att vara lycklig genom magen, oavsett om du är försiktig med peppar eller gillar att känna att du lever. Vi har en stor meny och en full bar med något för alla, trevlig atmosfär och uteservering. Allt mitt i lödningen.<br />Välkommen till oss!</p>
          </div>
          <div className="column">
            <div id="about-picture" className="picture-rounded" />
          </div>
        </div>
      </div>
    </section> */}
    <Divider size={60}/>
    {/* END About */}
    {/* Contact */}
    <section id="contact-section">
      <div className="container">
        <h2 className="is-size-1 has-text-weight-bold mb-20 pt-40 has-custom-font has-text-centered">Kontakt</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2039.6183991347002!2d18.07998571633953!3d59.25581688163315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f79c05664d3cd%3A0x3033ce8faec8582b!2sil%20Contadino!5e0!3m2!1sen!2sse!4v1591128936520!5m2!1sen!2sse" 
          height="350" 
          frameborder="0" 
          style={{border: "0", width: "100%"}} 
          allowfullscreen="" 
          aria-hidden="false" 
          tabindex="0"
          className="picture-rounded"
        >
        </iframe>
        <div className="columns p-20">
          <div className="column has-text-centered">
            <h4 className="is-size-3 has-text-weight-bold pt-25 mb-20 has-custom-font">Info</h4>
            <ContactInfoLabel label="Adress" labelDescription="Sirapsvägen 6, 123 56 Farsta"/>
            <ContactInfoLabel label="Telefon" labelDescription="08-604 80 07"/>
            {/* <ContactInfoLabel label="E-mail" labelDescription="info@ilcontadino.se"/> */}
          </div>
          {/* <div className="column">
            <h4 className="is-size-3 has-text-weight-bold pt-25 mb-20 has-text-centered has-custom-font">Meddelande</h4>
            <Form />
          </div> */}
        </div>
      </div>
    </section>
    {/* END Contact */}
    <footer class="footer">
      <div class="content has-text-centered">
        <p><strong>Il Contadino</strong> by {/*<a href="https://dincit.se">*/}Dincit{/*</a>*/}</p>
      </div>
    </footer>
  </React.Fragment>
)
