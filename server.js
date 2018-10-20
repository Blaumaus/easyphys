const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

app.use(express.static('public'));

app.listen(port, (err) => {
  if (err) {
    return console.log('error: ', err);
  }
  console.log(`Listening on ${port}`);
})
