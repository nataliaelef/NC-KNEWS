// const fs = require('fs');
const { endpoints } = require('../endpoints');

exports.getEndpoints = (req, res, next) => {
  // fs.readFile('./endpoints.json', 'utf8', (err, data) => {
  //   if (err) {
  //     next(err);
  //   } else {
  //     const endpoints = JSON.parse(data);
  res.status(200).send({ endpoints });
  // }
  // });
};
