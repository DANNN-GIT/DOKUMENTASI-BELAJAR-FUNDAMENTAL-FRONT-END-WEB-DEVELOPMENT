class ImageFigure extends HTMLElement {
   connectedCallback() {
      this.src = this.getAttribute('src') || null;
      this.alt = this.getAttribute('alt') || null;
      this.width = this.getAttribute('width') || null;
      this.caption = this.getAttribute('caption') || null;
      this.innerHTML = `
         <figure>
            <img src='${this.src}' alt='${this.alt}' width='${this.width}'>
            <figcaption>${this.caption}</figcaption>
         </figure>
      `;
   }
}
customElements.define('image-figure', ImageFigure);

const customFigure = document.createElement('image-figure');

customFigure.setAttribute('src', 'https://d17ivq9b7rppb3.cloudfront.net/original/jobs/flutter_content_writer_290520203243.png');
customFigure.setAttribute('alt', 'Logo Dicoding');
customFigure.setAttribute('caption', 'Dicoding Academy');
customFigure.setAttribute('width', '40%');

document.body.setAttribute('align', 'center');
document.body.appendChild(customFigure);