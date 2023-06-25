const router = require('express').Router();

const {
	getBooks,
	getBook,
	createBook,
	updateBook,
	deleteBook,
} = require('../controllers/books');

router.get('/all', getBooks);
router.get('/:book_id', getBook);
router.post('/', createBook);
router.patch('/:book_id', updateBook);
router.delete('/:book_id', deleteBook);
router.delete('/:book_id', deleteBook);

module.exports = router;
