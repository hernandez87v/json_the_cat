// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else if (desc[0] === undefined) {
    console.log('Not found');
  } else {
    console.log(desc[0].description);
  }
});
