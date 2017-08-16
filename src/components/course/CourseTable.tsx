import * as React from 'react';
import CourseRow from './CourseRow';


const CourseTable = ({ courses }: { courses: any[] }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course =>
                    <CourseRow key={course.id} course={course} />
                )}
            </tbody>
        </table>
    )
};

export default CourseTable;