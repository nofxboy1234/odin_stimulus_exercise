import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tweet"
export default class extends Controller {
  static targets = ['warning']
  static classes = ['hidden', 'visible', 'warning']  

  connect() {
  }

  checkLength(event) {
    console.log(event.target.value.length)

    if (event.target.value.length > 10) {
      this.warningTarget.className = this.visibleClass
      this.warningTarget.classList.add(this.warningClass)
    }
    else {
      this.warningTarget.className = this.hiddenClass
    }
  }

}
