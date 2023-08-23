const express = require('express');
const router = express.Router();
const BookController = require('../controllers/book-controller');

router.post('/', BookController.registBook);
router.put('/', BookController.modifyBook);

module.exports = router;