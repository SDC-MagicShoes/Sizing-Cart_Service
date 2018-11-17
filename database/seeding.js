//const SizesAndDescription = require('./sizesanddescription.js');
const faker = require('faker');
const fs = require('fs');

const records = 10000000;
const seedStream = fs.createWriteStream('./seed.csv');
let i = 1;
let j = 1;

const seed = () => {

  seedStream.write('shoeId, shoeName, sizes, description, shown\n');

  const createSchema = (num, cb) => {

    while (i <= num) {

      let sizes = '';
      let sizeContainer = {};
      for (let j = 0; j < 18; j++) {
        let size = Math.round(Math.random() * ((2 * 18) - (2 * 7)) + (2 * 7)) / 2;
        if (sizeContainer[size] !== 0) {
          //sizes.push(size);
          sizes += `${size} `;
        } else {
          sizeContainer[size] = 0;
        }
      }

      let shoeString = '';
      shoeString += i.toString() + ',';
      shoeString += `MagicShoes_${i},`;
      shoeString += `${sizes},`;
      shoeString += `${faker.lorem.sentences()},`;
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
// // const importData = require('../seed.csv');

// const records = 1000000;

// // const description = faker.lorem.sentences();
// const shown = 'Black/Sail/Gym Red/Gym Red';

// const sizesAndDescriptionSchema = []; const minValue = 7; const maxValue = 18; const
//   countOfSizes = 18;


// for (let i = 1; i <= records; i += 1) {
//   let sizes = [];
//   let sizeContainer = {};
//   for (let j = 0; j < 18; j++) {
//     let size = Math.round(Math.random() * ((2 * 18) - (2 * 7)) + (2 * 7)) / 2;
//     if (sizeContainer[size] === 0) {
//       sizes.push(size);
//     } else {
//       sizeContainer[size] = 0;
//     }
//   }

//   sizesAndDescriptionSchema.push({
//     id: i,
//     shoeName: 'Air Jordans ' + i,
//     sizes: sizes,
//     description: faker.lorem.sentences(),
//     shown
//   });
// }

// function convertToCSV(objArray) {
//   var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
//   var str = '';
//   for (var j = 0; j < array.length; j++) {
//     var line = '';
//     for (var index in array[j]) {
//       if (line != '') line += ','
//         line += array[j][index];
//       }
//       str += line + '\r\n';
//     }
//     return str;
// }

// var data = convertToCSV(sizesAndDescriptionSchema);

// var stream = fs.createWriteStream('seed.csv', {flags: 'a'});

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
