import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxState from './ajaxStateReducer';

const rootReducer = combineReducers({
    courses: courses,
    authors,
    ajaxState
});

export default rootReducer;