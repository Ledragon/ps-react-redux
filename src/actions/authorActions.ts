import { Author } from '../models/Author';
import * as Constants from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import { beginAjaxCall } from './ajaxStatusAction';

export function loadAuthorsSuccess(authors: Author[]) {
    return { type: Constants.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
    return function (dispatch: any) {
        dispatch(beginAjaxCall());
        return authorApi.getAllAuthors()
            .then(authors => {
                dispatch(loadAuthorsSuccess(authors));
            })
            .catch(error => {
                console.error(error);
                throw (error);
            });
    }
}