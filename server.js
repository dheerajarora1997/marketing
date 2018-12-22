const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('*', (req, res) => {
  res.send('check your url');
});

app.listen(process.env.PORT || 9999, () => {
  console.log('server started at port 9999');
});
