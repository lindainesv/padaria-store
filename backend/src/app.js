const express = require('express');
const { productsRouter, salesRouter } = require('./routers');

const app = express();

app.use(express.json());

app.get('/', (_request, response) => {
  response.json({ status: 'Store UP!' });
});

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

module.exports = app;