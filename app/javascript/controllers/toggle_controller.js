import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ['divToToggle', 'dropDownToShow']
  static classes = ['hidden', 'visible']

  connect() {
  }

  toggleVisibility() {
    this.divToToggleTarget.classList.toggle(this.hiddenClass)
  }

  hide() {

  }

  show() {
    this.dropDownToShowTarget.className = this.visibleClass
  }
}
