const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { getSizes } = require('../database/sizesanddescription.js');
const { getDescription } = require('../database/sizesanddescription.js');


app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());


app.get('/:shoeId/sizes', (req, res) => {
  const { shoeId } = req.params;
  getSizes(shoeId, (error, sizes) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(sizes);
    }
  });
});
app.get('/:name/sizes', (req, res) => {});

app.get('/:shoeId/descrip', (req, res) => {
  const { shoeId } = req.params;
  getDescription(shoeId, (error, description) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.send(description);
    }
  });
});
app.get('/:name/descrip', (res, req) => {});

app.route('/')
  .get((res, req) => {}) //get all
  .post((res, req) => {});

app.route('/:shoeId')
  .patch((res, req) => {})
  .delete((res, req) => {});

app.route('/:name')
  .patch((res, req) => {})
  .delete((res, req) => {});

module.exports = app;
