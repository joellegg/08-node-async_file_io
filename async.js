#!/usr/bin/env node

const { readFile } = require('fs');

readFile('08.json', encoding = 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
