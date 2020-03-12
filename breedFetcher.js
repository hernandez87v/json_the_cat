const request = require('request');
const uploadCom = process.argv.slice(2);
const search = 'https://api.thecatapi.com/v1/breeds/search/?q=';

let find = search + uploadCom;

request(find, function(error, response, body) {
  const data = JSON.parse(body);
  if (error) {
    return error;
  } else if (data[0] === undefined) {
    console.log('Not found');
  } else {
    console.log(data[0].description);
  }
});
