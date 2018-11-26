DROP DATABASE IF EXISTS airjordan;
CREATE DATABASE airjordan;
\c airjordan;

CREATE TABLE IF NOT EXISTS sizesanddescriptions(
  shoeid integer NOT NULL,
  shoename varchar(25),
  sizes TEXT,
  description TEXT,
  shown TEXT
);

COPY sizesanddescriptions FROM '/Users/blakeforrest/SDC/sizing-cart_service/seed.csv' delimiter E'\t';