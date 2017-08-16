import { Course } from '../models/course';
import * as Constants from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course: Course) {
    return { type: Constants.CREATE_COURSE, course };
}
export function loadCoursesSuccess(courses: Course[]) {
    return { type: Constants.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
    return function (dispatch: any) {
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