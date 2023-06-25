const router = require('express').Router();
const readerRouter = require('./readers');
const bookRouter = require('./books');
const loggerOriginalUrl = require('../middlewares/loggerOriginalUrl');

router.use(loggerOriginalUrl);

router.use('/readers', readerRouter);
router.use('/books', bookRouter);

module.exports = router;
