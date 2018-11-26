require('newrelic');

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { getSizesAndDescription } = require('../database/indexP.js');
// const { getDescription } = require('../database/sizesanddescription.js');


app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());


app.get('/:shoeId/sizes', (req, res) => {
  // console.log(req.params);
  const { shoeId } = req.params;
  getSizesAndDescription(shoeId, (error, sizes) => {
    console.log(error, sizes);
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(sizes);
    }
  });
});
// app.get('/:name/sizes', (req, res) => {});

// app.get('/:shoeId/descrip', (req, res) => {
//   const { shoeId } = req.params;
//   getDescription(shoeId, (error, description) => {
//     if (error) {
//       res.sendStatus(500);
//     } else {
//       res.send(description);
//     }
//   });
// });
// app.get('/:name/descrip', (res, req) => {});

// app.route('/')
//   .get((res, req) => {
//     findAll((error, description) => {
//       if (error) {
//         res.sendStatus(500);
//       } else {
//         res.send(description);
//       }
//     })
//   }) //get all
//   .post((res, req) => {
//     insertOne(req.body, (error) => {
//       if (error) {
//         res.sendStatus(500);
//       } else {
//         res.sendStatus(201);
//       }
//     })
//   });

// app.route('/:shoeId')
//   .patch((res, req) => {
//     const { shoeId } = req.params;
//     update(shoeId, req.body, (error) => {
//       if (error) {
//         res.sendStatus(500);
//       } else {
//         res.sendStatus(204);
//       }
//     })
//   })
//   .delete((res, req) => {
//     const { shoeId } = req.params;
//     deleteOne(shoeId, (error) => {
//       if (error) {
//         res.sendStatus(500);
//       } else {
//         res.sendStatus(202);
//       }
//     })
//   });

// app.route('/:name')
//   .patch((res, req) => {})
//   .delete((res, req) => {});

 module.exports = app;
