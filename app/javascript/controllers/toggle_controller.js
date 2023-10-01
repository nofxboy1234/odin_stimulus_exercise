import { Controller } from '@hotwired/stimulus';

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = [
    'divToToggle',
    'dropDownToShow',
    'buttonToHide',
    'buttonToShow',
  ];
  static classes = ['hidden', 'visible', 'highlight'];

  connect() {}

  toggleVisibility({ params: { element } }) {
    // console.log(event.params['element'])
    // console.log(params)
    console.log(element)
    console.log(typeof element)
    console.log(this.targets.find(element))
    this.targets.find(element).classList.toggle(this.hiddenClass);
  }

  hideThenShow() {
    this.buttonToHideTarget.className = this.hiddenClass;
    this.buttonToShowTarget.className = this.visibleClass;
  }

  show(event) {
    this.dropDownToShowTarget.className = this.visibleClass;
  }

  highlightParent(event) {
    this.element.classList.toggle(this.highlightClass)
  }
}
