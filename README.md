## Pitchfork API Search

*Beware: Pitchfork has no official API, this module is based on the endpoints available through reverse engineering of their new React website*

To use Pitchfork API Search, first include it in your NodeJS app:

```javascript
//ES5
var P4KSearch = require('pitchfork-search-api');

//ES6
import P4KSearch from 'pitchfork-search-api';
```
*Note: if you want to use ES6 with NodeJS, be sure to run it with [Babel CLI](https://babeljs.io/docs/usage/cli/#babel-node)* `babel-node`

The exported function accept two arguments, an options object and a callback

```javascript
//ES5
P4KSearch({
  query: 'vampire weekend' // your search keyword
}, function(results) {
  // do something with results...
  console.log(results);
});

//ES6
P4KSearch({
  query: 'vampire weekend'
}, (results) => {
  // do something with results...
});
```
