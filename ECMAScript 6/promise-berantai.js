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

const makeCoffe = seeds => {
   return new Promise((resolve, reject) => {
      if (state.isCoffeeMakerReady) {
         resolve('Kopi berhasil dibuat!');
      } else {
         reject('Maaf mesin tidak dapat digunakan!');
      }
   });
};

const servingToTable = coffe => {
   return new Promise(resolve => {
      resolve('Pesanan kopi sudah selesai!');
   });
};

function reserveACoffee(type, miligrams) {
   getSeeds(type, miligrams)
      .then(makeCoffe)
      .then(servingToTable)
      .then(resolvedValue => {
         console.log(resolvedValue);
      })
      .catch(rejectedReason => {
         console.log(rejectedReason);
      });
}
reserveACoffee('liberica', 80);