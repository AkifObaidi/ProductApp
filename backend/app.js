const express = require('express');
const app = express();
const notFound = require('./middleware/notFound');
const products = require('./routes/products');
const cors = require('cors');

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', products);
app.use(notFound);

const server = app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Server started at port', server.address().port);
});




