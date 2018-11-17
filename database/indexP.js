const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/airjordan';
const file_path = '../seed.csv';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  `CREATE TABLE sizesanddescriptions(shoeId INT, shoeName TEXT, sizes TEXT, description TEXT, shown TEXT)`, () => {
    client.end();
  });
// const query = client.query(
//   'DROP TABLE sizesanddescriptions', () => {
//     client.end();
//   });