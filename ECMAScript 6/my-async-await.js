function movies() {
   return new Promise((resolve, reject) => {
      const timer = 5000;
      if (timer < 5000) {
         setTimeout(() => {
            resolve('API movies berhasil ditangkap.');
         }, );
      } else {
         reject('API movies gagal ditangkap!');
      }
   });
}

async function getMovies() {
   try {
      console.log(await movies());
   } catch (error) {
      console.log(error);
   }
}

getMovies();