/* exported db */

const mongoose = require('mongoose');
require('./index.js');

const sizesAndDescriptionSchema = new mongoose.Schema({
  shoeId: { type: String },
  sizes: [Number],
  style: String,
  description: String,
  shown: String,
});

const SizesAndDescription = mongoose.model('SizesAndDescription', sizesAndDescriptionSchema);

const getSizes = (shoeId, callback) => {
  SizesAndDescription.find({ shoeId }, (error, documents) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, documents[0].sizes);
    }
  });
};

const getDescription = (shoeId, callback) => {
  SizesAndDescription.find({ shoeId }, (error, documents) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, [documents[0].style, documents[0].shown, documents[0].description]);
  });
};

const findAll = (callback) => {
  SizesAndDescription.find({}, (error, documents) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, documents);
    }
  })
}

const insertOne = (info, callback) => {
  SizesAndDescription.insert({sizes: info.sizes, style: info.style, description: info.description, shown: info.shown}, (error) => {
    if (error) {
      callback(error);
    } else {
      callback(null);
    }
  });
};

const update = (shoeId, info, callback) => {
  SizesAndDescription.replaceOne({shoeId: shoeId}, {sizes: info.sizes, style: info.style, description: info.description, shown: info.shown}, (error) => {
    if (error) {
      callback(error);
    } else {
      callback(null);
    }
  })
}

const deleteOne = (shoeId, callback) => {
  SizesAndDescription.deleteOne({shoeId: shoeId}, (error) => {
    if (error) {
      callback(error);
    } else {
      callback(null);
    }
  })
}


module.exports = SizesAndDescription;
module.exports.getSizes = getSizes;
module.exports.getDescription = getDescription;
