const { createServer } = require('http');
const s3 = require('s3'); // !!!

const handler = async (req, res) => {
  res.end('Hello Now');
};

module.exports = handler;
