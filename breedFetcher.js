const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }
    
    const data = JSON.parse(body);
  
    if (!Array.isArray(data) || !data.length) {
      error = `Requested breed: ${breedName} is not found.`;
      callback(error, null);
      return;
    }
    
    const description = data[0].description.trim();

    callback(error, description);
    return;
  });
};

module.exports = { fetchBreedDescription };