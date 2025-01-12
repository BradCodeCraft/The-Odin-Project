const db = require('../db.js');
const CustomNotFoundError = require('../errors/CustomNotFoundError.js');

async function getAuthorById(req, res) {
  const { authorId } = req.params;

  const author = await db.getAuthorId(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError(`Author with id ${authorId} not found`);
  }

  res.send(`Author Name: ${author.name}`);
}

module.exports = { getAuthorById };
