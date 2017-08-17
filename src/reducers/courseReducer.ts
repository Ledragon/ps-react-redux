import * as Constants from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state: any = initialState.courses, action: any): any {
    switch (action.type) {
        case Constants.CREATE_COURSE:
            return [...state, Object.assign({}, action.course)];
        case Constants.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}