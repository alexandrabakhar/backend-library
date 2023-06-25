const Reader = require('../models/reader');

const getReaders = (request, response) => {
	//Get all readers
	Reader.find({})
		.then((reader) => {
			response.status(200).send(reader);
		})
		.catch((e) => {
			response.status(500).send(e.message);
		});
};

const getReader = (request, response) => {
	//Get reader by id

	const { reader_id } = request.params;

	Reader.findById(reader_id)
		.then((reader) => {
			response.status(200).send(reader);
		})
		.catch((e) => {
			response.status(500).send(e.message);
		});
};

const createReader = (request, response) => {
	//Create a new reader
	const data = request.body;
	const username = body.username;

	if (Reader.find({ username: username })) {
		response
			.status(200)
			.send(`Пользователь с username ${username} уже существует`)
			.catch((e) => {
				response.status(500).send(e.message);
			});
	} else {
		Reader.create(data)
			.then((reader) => {
				response.status(201).send(reader);
			})
			.catch((e) => {
				response.status(500).send(e.message);
			});
	}
};

const updateReader = (request, response) => {
	//Update reader by book id

	const { reader_id } = request.params;
	const data = request.body;
	Reader.findByIdAndUpdate(reader_id, data, {
		new: true,
		runValidators: true,
	})
		.then((reader) => {
			response.status(200).send(reader);
		})
		.catch((e) => {
			response.status(500).send(e.message);
		});
};

const deleteReader = (request, response) => {
	//Delete reader by reader id
	const { reader_id } = request.params;

	Reader.findByIdAndDelete(reader_id)
		.then((reader) => {
			response.status(200).send('Done');
		})
		.catch((e) => {
			response.status(500).send(e.message);
		});
};

const takeBook = (request, response) => {
	//Delete reader by reader id
	const { reader_id } = request.params;
	const { book_id } = request.params;

	Reader.findByIdAndUpdate(
		reader_id,
		{ $addToSet: { books: book_id } },
		{ new: true, runValidators: true }
	)
		.then((reader) => {
			response.status(200).send(reader);
		})
		.catch((e) => {
			response.status(500).send(e.message);
		});
};

const returnBook = (request, response) => {
	//Delete reader by reader id
	const { reader_id } = request.params;
	const { book_id } = request.params;

	Reader.findByIdAndUpdate(
		reader_id,
		{ $pullAll: { books: [{ _id: book_id }] } },
		{ new: true, runValidators: true }
	)
		.then((reader) => {
			response.status(200).send(reader);
		})
		.catch((e) => {
			response.status(500).send(e.message);
		});
};

module.exports = {
	getReaders,
	getReader,
	createReader,
	updateReader,
	deleteReader,
	takeBook,
	returnBook,
};
