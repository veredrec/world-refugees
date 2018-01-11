const app = require('./server.js');
const connection = require('./../data/db_connection.js');

const PORT = process.env.PORT || 7000;

connection.once('open', () => {
  console.log('Connected to database');
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
