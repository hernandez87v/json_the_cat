const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(
    'https://api.thecatapi.com/v1/breeds/search/?q=' + breedName,
    function(error, response, body) {
      const data = JSON.parse(body);
      console.log(data);
      callback(error, data[0].description);
      //response(desc[0].description);
    }
  );
};
module.exports = { fetchBreedDescription };

// const request = require('request');
// const breedName = process.argv.slice(2);
// const search = 'https://api.thecatapi.com/v1/breeds/search/?q=';

// let fetchBreedDescription = search + breedName;

// request(fetchBreedDescription, function(error, response, body) {
//   const data = JSON.parse(body);
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else if (data[0] === undefined) {
//     console.log('Not found');
//   } else {
//     console.log(data[0].description);
//   }
// });

// module.exports = { fetchBreedDescription };
