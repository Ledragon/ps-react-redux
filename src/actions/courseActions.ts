import { Course } from '../models/course';
import * as Constants from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall } from './ajaxStatusAction';

export function createCourse(course: Course) {
    return { type: Constants.CREATE_COURSE, course };
}
export function loadCoursesSuccess(courses: Course[]) {
    return { type: Constants.LOAD_COURSES_SUCCESS, courses };
}
export function updateCourseSuccess(course: Course) {
    return { type: Constants.UPDATE_COURSE_SUCCESS, course };
}
export function createCourseSuccess(course: Course) {
    return { type: Constants.CREATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
    return function (dispatch: any) {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses()
            .then(courses => {
                dispatch(loadCoursesSuccess(courses));
            })
            .catch(error => {
                console.error(error);
                throw (error);
            });
    }
}

export function saveCourse(course: Course) {
    return function (dispatch: any, getState: any) {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course)
            .then(data => {
                data.id
                    ? dispatch(updateCourseSuccess(data))
                    : dispatch(createCourseSuccess(data));
            })
            .catch(error => {
                console.error(error);
                throw (error);
            })
    }
}