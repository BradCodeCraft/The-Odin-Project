const authors = [
  { id: 1, name: 'Bryan' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Jane' }
]

async function getAuthorId(authorId) {
  return authors.find(author => author.id === authorId);
};

module.exports = { getAuthorId };
