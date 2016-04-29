var axios = require('axios');

var ROOT_URL = 'http://pitchfork.com/api/v1/search/_ac/';

module.exports = function(options, callback) {
  var params = {
    query: options.query
  };

  axios.get(ROOT_URL, {
      params: params,
      headers: {
        'User-Agent': 'andreavaghi/pitchfork-api-search'
      }
    })
    .then(function(response) {
      if (callback) {
        callback(response.data);
      }
    })
    .catch(function(error) {
      console.error(error);
    });
};
