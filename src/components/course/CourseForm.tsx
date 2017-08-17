import * as React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

import { Course } from '../../models/course';


const CourseForm = ({ course, allAuthors, onSave, onChange, loading, errors }: { course: Course, allAuthors: Array<any>, onSave: any, onChange: any, loading: boolean, errors: any }) => {
    return (
        <form>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}
                placeholder="Title"
            />
            <SelectInput
                name="author"
                defaultOption="Select author"
                label="Select author"
                options={allAuthors}
                onChange={onChange}
                value={course.authorId}
                error={{}}
            >
            </SelectInput>
            <TextInput
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                error={errors.category}
                placeholder="Insert category here"
            />
            <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={errors.length}
                placeholder="Course length"
            />
            <button className="btn btn-sm btn-primary" type="submit" onClick={onSave}>Save</button>
        </form>
    )
}

export default CourseForm;