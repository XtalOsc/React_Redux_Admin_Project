if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
}//end if
else {
  module.exports = require('./configureStore.dev');
}//end else
