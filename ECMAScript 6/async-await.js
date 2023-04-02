const getCoffee = () => {
   return new Promise((resolve, reject) => {
      const seeds = 100;
      setTimeout(() => {
         if (seeds > 100) {
            resolve('Coffee didapatkan!');
         } else {
            reject('Biji kopi habis!');
         }
      }, 1000);
   });
};

async function makeCoffee() {
  const coffee = await getCoffee();
  console.log(coffee);
}

makeCoffee();