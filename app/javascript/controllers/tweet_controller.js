import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tweet"
export default class extends Controller {
  connect() {
  }

  checkLength(event) {
    console.log(event.target.value.length)
  }
}
