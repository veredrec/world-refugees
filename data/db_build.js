// File to run once to populate the database

const Country = require('./country_model.js');
const connection = require('./db_connection.js');
const countryData = require('./country_data.js');

connection.once('open', () => {
  connection.db.dropCollection('countries', (err, res) => {
    if (err) console.log('Error:', err);
    Country.insertMany(countryData, error => {
      if (err) console.log(error);
      connection.close();
    });
  });
});
