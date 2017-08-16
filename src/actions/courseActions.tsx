import { Course } from '../models/course';

export function createCourse(course: Course) {
    return { type: 'CREATE_COURSE', course };
}