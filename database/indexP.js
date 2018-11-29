const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/airjordan';
const file_path = '../seed.csv';

const client = new pg.Client(connectionString);
client.connect();
// const query = client.query(
//   `CREATE TABLE sizesanddescriptions(shoeId INT, shoeName TEXT, sizes TEXT, description TEXT, shown TEXT)`, () => {
//     client.end();
//   });
// const query = client.query(
//   'DROP TABLE sizesanddescriptions', () => {
//     client.end();
//   });

// const getSizesAndDescriptions = client.query(
//   `SELECT * FROM sizesanddescriptions WHERE shoeid = ${shoeid}`, () => {
//     client.end();
//   });
const getSizes = (shoeid, callback) => {
  client.query(`SELECT * FROM sizesanddescriptions WHERE shoeid = ${shoeid}`).then(results => {
  	callback(null, results.rows[0].sizes);
  })
};

const getDescription = (shoeid, callback) => {
  client.query(`SELECT * FROM sizesanddescriptions WHERE shoeid = ${shoeid}`).then(results => {
  	callback(null, [results.rows[0].style, results.rows[0].shown, results.rows[0].description]);
  })
};

module.exports.getSizes = getSizes;
module.exports.getDescription = getDescription;