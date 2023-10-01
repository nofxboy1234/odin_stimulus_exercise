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
    console.log(element);
    console.log(typeof element);
    console.log(this.targets.find(element));
    this.targets.find(element).classList.toggle(this.hiddenClass);
  }

  hideThenShow(event) {
    const hide_element = event.params['hide']
    const show_element = event.params['show']

    console.log(hide_element);
    console.log(show_element);

    this.hide(hide_element);
    // this.targets.find(hide_element).className = this.hiddenClass;
    // this.buttonToHideTarget.className = this.hiddenClass;

    this.show(event);
    // this.targets.find(show_element).className = this.visibleClass;
    // this.buttonToShowTarget.className = this.visibleClass;
  }

  hide(element) {
    console.log(element);
    this.targets.find(element).className = this.hiddenClass;
  }

  show({ params: { show } }) {
    console.log(show);
    this.targets.find(show).className = this.visibleClass;
    // this.dropDownToShowTarget.className = this.visibleClass;
  }

  highlightParent(event) {
    this.element.classList.toggle(this.highlightClass);
  }
}
