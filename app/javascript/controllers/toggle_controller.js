import { Controller } from '@hotwired/stimulus';

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = [
    'divToToggle',
    'dropDownToShow',
    'buttonToHide',
    'buttonToShow',
  ];
  static classes = ['hidden', 'visible'];

  connect() {}

  toggleVisibility() {
    this.divToToggleTarget.classList.toggle(this.hiddenClass);
  }

  hideThenShow() {
    this.buttonToHideTarget.className = this.hiddenClass;
    this.buttonToShowTarget.className = this.visibleClass;
  }

  show(event) {
    this.dropDownToShowTarget.className = this.visibleClass;
  }
}
