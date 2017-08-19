import * as Constants from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state: number = initialState.ajaxCallsCount, action: { type: string }): any {
    if (action.type === Constants.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (action.type.indexOf('_SUCCESS') > 0) {
        return state - 1;
    }
    return state;
}