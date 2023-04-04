let imageFigureElement = document.querySelector('image-figure');

if (!imageFigureElement) {
   imageFigureElement = document.createElement('image-figure');
   document.body.insertBefore(imageFigureElement, document.body.children[0]);
}
 
// Mengubah / manambahkan nilai attribute caption.
setTimeout(() => {
   imageFigureElement.setAttribute('caption', 'Gambar 1');
}, 1000);
 
// Menghapus imageFigureElement dari DOM
setTimeout(() => {
   imageFigureElement.remove();
}, 3000);