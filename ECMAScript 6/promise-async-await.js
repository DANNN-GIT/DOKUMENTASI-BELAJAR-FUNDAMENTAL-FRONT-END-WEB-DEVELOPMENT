const state = {
   isCoffeeMakerReady: true,
   seedStocks: {
      arabica: 250,
      robusta: 60,
      liberica: 80,
   }
};

const getSeeds = (type, miligrams) => {
   return new Promise((resolve, reject) => {
      if (state.seedStocks[type] >= miligrams) {
         state.seedStocks[type] -= miligrams;
         resolve('Biji kopi didapatkan!');
      } else {
         reject('Maaf stock kopi habis!');
      }
   });
};

const makeCoffe = (seeds) => {
   return new Promise((resolve, reject) => {
      if (state.isCoffeeMakerReady) {
         resolve('Kopi berhasil dibuat!');
      } else {
         reject('Maaf mesin tidak dapat digunakan!');
      }
   });
};

const servingToTable = (coffe) => {
   return new Promise(resolve => {
      resolve('Pesanan kopi sudah selesai!');
   });
};

async function reserveACoffee(type, miligrams) {
   try {
      const seeds = await getSeeds(type, miligrams);
      const coffe = await makeCoffe(seeds);
      const result = await servingToTable(coffe);
      console.log(result);
   } catch (error) {
      console.log(error);
   }
}
reserveACoffee('liberica', 810);