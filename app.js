const express = require('express');
const morgan = require('morgan');
const bookRouter = require('./src/routes/book-route');

const app = express();

app.use(morgan('dev'));
app.use(express.json());


app.use('/books', bookRouter);


app.listen(8888, () => console.log('Server is running on port 8888'));