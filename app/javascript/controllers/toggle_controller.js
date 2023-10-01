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

  hideThenShow({ params: { hide, show } }) {
    console.log(hide)
    console.log(show)

    this.targets.find(hide).className = this.hiddenClass
    // this.buttonToHideTarget.className = this.hiddenClass;
    this.targets.find(show).className = this.visibleClass
    // this.buttonToShowTarget.className = this.visibleClass;
  }

  hide({ params: { element } }) {

  }

  show({ params: { element } }) {
    console.log(element)
    this.targets.find(element).className = this.visibleClass
    // this.dropDownToShowTarget.className = this.visibleClass;
  }

  highlightParent(event) {
    this.element.classList.toggle(this.highlightClass)
  }
}
