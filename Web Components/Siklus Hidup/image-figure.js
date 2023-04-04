class ImageFigure extends HTMLElement {
   constructor() {
      super();
      console.log('Contructed!');
   }
   connectedCallback() {
      console.log('Connected!');
   }
   disconnectedCallback() {
      console.log('Diconnected!');
   }
   adoptedCallback() {
      console.log('Adopted!');
   }
   attributeChangedCallback(name, oldValue, newValue) {
      console.log(`Attribute: ${name} changed!`);
   }
   static get observedAttributes() {
      return ['caption'];
   }
}
customElements.define('image-figure', ImageFigure);