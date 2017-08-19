import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsCount from './ajaxStateReducer';

const rootReducer = combineReducers({
    courses: courses,
    authors,
    ajaxCallsCount
});

export default rootReducer;