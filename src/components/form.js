import React from "react"

export default () => {
  return (
    <>
      <div class="field">
        <label class="label">Namn</label>
        <div class="control">
          <input class="input" type="text" placeholder=""/>
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input class="input" type="email" placeholder="" value=""/>
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Skicka</button>
        </div>
      </div>
    </>
  )
}