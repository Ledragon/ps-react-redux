import * as Constants from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state: any = initialState.authors, action: any): any {
    switch (action.type) {
        case Constants.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}