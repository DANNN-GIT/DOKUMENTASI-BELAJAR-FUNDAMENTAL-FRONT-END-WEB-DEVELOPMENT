import '../css/app.css';
import '../scss/styles.scss';
import * as bootstrap from 'bootstrap';

window.addEventListener("scroll", () => {
   const navigation = document.querySelector("nav");
   if (window.scrollY > 8) {
      navigation.classList.add("enable-sticky");
   } else {
      navigation.classList.remove("enable-sticky");
   }
})

document.addEventListener('DOMContentLoaded', () => {
   const baseUrl = 'http://api.themoviedb.org/3/movie/popular?api_key=';
   const apiKey = '11d7efd6d712c860c435bc0b499279ca';
   const getMovies = async () => {
      try {
         const response = await fetch(`${baseUrl}${apiKey}`);
         const responseJson = await response.json();
         const boxMovies = document.getElementById('box-popular-movies');
         
         responseJson.results.forEach(async movie => {
            const moviesTrailer = `http://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=11d7efd6d712c860c435bc0b499279ca`;
            const responseTrailer = await fetch(`${moviesTrailer}`);
            const responseJsonTrailer = await responseTrailer.json();
            boxMovies.innerHTML += `
               <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                  <div class="card shadow border-0">
                     <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="card-img-top">
                     <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text mb-2" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">${movie.overview}</p>
                        <p class="card-text mb-2">Release Date : ${movie.release_date}</p>
                        <p class="card-text mb-2">Rating : ${movie.vote_average}</p>
                        <a href="https://www.youtube.com/watch?v=${responseJsonTrailer.results[0].key}" target="_blank" class="d-grid btn btn-danger btn-block">Trailer</a>
                     </div>
                  </div>
               </div>
            `;
         });
      } catch (error) {
         console.error(error);;
      }
   }
   getMovies()

   class navMenu extends HTMLElement {
      connectedCallback() {
         this.render();
      }
      render() {
         this.innerHTML = `
            <nav class="navbar navbar-expand-lg bg-transparent fixed-top">
               <div class="container">
                  <a class="navbar-brand text-white" href="#">Nonton.in Ajah!</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                     <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                           <a class="nav-link text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link text-white" href="#popularMovies">Popular Movies</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
         `;
      }
   }
   customElements.define('app-bar', navMenu);

   class ImageSlider extends HTMLElement {
      connectedCallback() {
         this.render();
      }
      render() {
         this.innerHTML = `
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="3000">
                     <img src="https://wallpaperset.com/w/full/4/0/7/493550.jpg" class="img-fluid d-block w-100">
                  </div>
                  <div class="carousel-item" data-bs-interval="3000">
                     <img src="https://wallpaperset.com/w/full/a/3/0/190268.jpg" class="img-fluid d-block w-100">
                  </div>
                  <div class="carousel-item" data-bs-interval="3000">
                     <img src="https://images4.alphacoders.com/909/thumb-1920-909185.jpg" class="img-fluid d-block w-100">
                  </div>
               </div>
               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
               </button>
            </div>
         `;
      }
   }
   customElements.define('image-slider', ImageSlider);

   class MoviesList extends HTMLElement {
      connectedCallback() {
         this.render();
      }
      render() {
         this.innerHTML = `
            <div class="container-fluid bg-dark py-5" id="popularMovies">
               <h2 class="text-center text-white">Popular Movies</h2>
               <div class="container mt-5">
                  <div class="row" id="box-popular-movies"></div>
               </div>
            </div>
         `;
      }
   }
   customElements.define('movies-list', MoviesList);
})
