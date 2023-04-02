const {coffeeStock, baksoStock} = require('./state.js');

const makeCoffe = (type, order) => {
   if (coffeeStock[type] > order) {
      console.log('Kopi berhasil dibuat.');
   } else {
      console.log('Biji kopi sudah habis!');
   }
};

const makeBakso = (type, order) => {
   if (baksoStock[type] > order) {
      console.log('Bakso berhasil dibuat.');
   } else {
      console.log('Bakso sudah habis!');
   }
}

makeCoffe('robusta', 170);
makeBakso('beranak', 10);