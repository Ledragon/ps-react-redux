import { Course } from '../models/course';
import * as Constants from './actionTypes';

export function createCourse(course: Course) {
    return { type: Constants.CREATE_COURSE, course };
}