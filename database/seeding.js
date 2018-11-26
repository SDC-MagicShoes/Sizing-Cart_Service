//const SizesAndDescription = require('./sizesanddescription.js');
const faker = require('faker');
const fs = require('fs');

const records = 10000000;
const seedStream = fs.createWriteStream('./seed.csv');
let i = 1;
let j = 1;

const seed = () => {

  // seedStream.write('shoeId\t shoeName\t sizes\t description\t shown\n');

  const createSchema = (num, cb) => {

    while (i <= num) {

      let sizes = [];
      let sizeContainer = {};
      for (let j = 0; j < 18; j++) {
        let size = Math.round(Math.random() * ((2 * 18) - (2 * 7)) + (2 * 7)) / 2;
        if (sizeContainer[size] !== 0) {
          //sizes.push(size);
          sizes.push(size);
        } else {
          sizeContainer[size] = 0;
        }
      }

      let shoeString = '';
      shoeString += i.toString() + '\t';
      shoeString += `MagicShoes_${i}\t`;
      shoeString += `[${sizes}]\t`;
      shoeString += `${faker.lorem.sentences()}\t`;
      shoeString += 'Black/Sail/Gym Red/Gym Red\n';

      i += 1;

      if (!seedStream.write(shoeString)) {
        return;
      }
    }

    seedStream.end();
    cb();
  }

  seedStream.on('drain', () => {
    createSchema(records, () => {
      console.log('seeding complete');
    })
  });

  createSchema(records, () => {
    console.log('seeding complete');
  })
}

seed();

// SizesAndDescription.deleteMany({}, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     SizesAndDescription.insertMany(data, (err, documents) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(`=-=-=-=-=-= FINISHED DB SEEDING WITH ${documents.length} DOCS =-=-=-=-=-=`);
//         //console.log(documents);
//       }
//       process.exit();
//     });
//   }
// });
