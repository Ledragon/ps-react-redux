import { Author } from '../models/Author';
import * as Constants from './actionTypes';
import authorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(Authors: Author[]) {
    return { type: Constants.LOAD_AUTHORS_SUCCESS, Authors };
}

export function loadAuthors() {
    return function (dispatch: any) {
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