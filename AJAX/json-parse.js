const popularMovies = `{
   "error": false,
   "message": "success",
   "movies list": [
      {
         "id": 1,
         "title": "Creed 3",
         "director": "Michael B. Jordan"
      },
      {
         "id": 2,
         "title": "Blood",
         "director": "Brad Anderson"
      },
      {
         "id": 3,
         "title": "We Have a Ghost",
         "director": "Christopher Landon"
      },
      {
         "id": 4,
         "title": "Missing",
         "director": "Nicholas D. Johnson, Will Merrick"
      },
      {
         "id": 5,
         "title": "Evil Dead Rise",
         "director": "Lee Cronin"
      },
      {
         "id": 6,
         "title": "Titanic",
         "director": "James Cameron"
      },
      {
         "id": 7,
         "title": "Troll",
         "director": "Roar Uthaug"
      },
      {
         "id": 8,
         "title": "The Fast and the Furious",
         "director": "Vin Diesel"
      }
   ]
}`;

const parseData = JSON.parse(popularMovies);
console.log(parseData);