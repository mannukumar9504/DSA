const fs = require('fs');

try {
    const data = fs.readFileSync('index.html', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }