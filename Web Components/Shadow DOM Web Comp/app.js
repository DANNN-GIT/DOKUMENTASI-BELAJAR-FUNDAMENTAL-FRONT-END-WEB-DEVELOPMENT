class ImageFigure extends HTMLElement {
   constructor() {
      super();
      this._shadowRoot = this.attachShadow({mode: 'open'});
   }

   connectedCallback() {
      this.src = this.getAttribute('src') || null;
      this.alt = this.getAttribute('alt') || null;
      this.caption = this.getAttribute('caption') || null;
      this.render();
   }

   render() {
      this._shadowRoot.innerHTML = `
         <style>
            .custom-styling {
               border: thin #c0c0c0 solid;
               display: flex;
               flex-flow: column;
               padding: 5px;
               max-width: 320px;
               margin: auto;
               margin-bottom: 2%;
            }
            .custom-styling > img {
               width: 100%;
            }
            .custom-styling > figcaption {
               background-color: #222;
               color: #fff;
               font: italic smaller sans-serif;
               padding: 6px;
               text-align: center;
               font-size: medium;
            }
         </style>

         <figure class='custom-styling'>
            <img src='${this.src}' alt='${this.alt}' width='${this.width}'>
            <figcaption>${this.caption}</figcaption>
         </figure>
      `;
   }

   attributeChangedCallback(name, oldValue, newValue) {
      this[name] = newValue;
      this.render();
   }

   static get observedAttributes() {
      return ['caption'];
   }
}
customElements.define('image-figure', ImageFigure);

const customFigure = document.createElement('image-figure');

customFigure.setAttribute('src', 'https://d17ivq9b7rppb3.cloudfront.net/original/jobs/flutter_content_writer_290520203243.png');
customFigure.setAttribute('alt', 'Logo Dicoding');
customFigure.setAttribute('caption', 'Dicoding Academy');

document.body.setAttribute('align', 'center');
document.body.appendChild(customFigure);