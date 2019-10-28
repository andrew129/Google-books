const router = require("express").Router();
const booksController = require('../../controllers/booksController')

router.route('/api/books', booksController.findAll)
router.route('/api/books', booksController.create)
router.route('/api/books/:id', booksController.remove)

module.exports = router;
