var result;
if (process.env.NODE_ENV === 'production') {
    result = require('./configureStore.prod')
} else {
    result = require('./configureStore.dev')
}
export default result;