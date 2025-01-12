const fs = require('fs');
const path = require('path');

const content = 'Hello World from Brad\n';

fs.writeFile(path.join(__dirname, 'files.txt'), content, { flag: 'w+' }, err => {
  if (err) {
    console.error(err);
  }
});

fs.appendFile(path.join(__dirname, 'files.txt'), 'Appending text to file', err => {
  if (err) {
    console.error(err);
  }
});

fs.readFile(path.join(__dirname, 'files.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log(data);
  }
});
