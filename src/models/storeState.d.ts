import { Course } from './course';
import { Author } from './author';
export interface StoreState {
    courses: Course[];
    authors: Author[];
    ajaxCallsCount: number;
}