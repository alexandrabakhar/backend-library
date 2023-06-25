const router = require('express').Router();

const {
	getReaders,
	getReader,
	createReader,
	updateReader,
	deleteReader,
	takeBook,
	returnBook,
} = require('../controllers/readers');

router.get('/all', getReaders);
router.get('/:reader_id', getReader);
router.post('/', createReader);
router.post('/:reader_id/:book_id', takeBook);
router.patch('/:reader_id', updateReader);
router.delete('/:reader_id', deleteReader);
router.delete('/:reader_id/:book_id', returnBook);

module.exports = router;
