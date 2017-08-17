import * as React from 'React';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({ course, allAuthors, onSave, onChange, loading, errors }: any) => {
    return (
        <form>
            <h1>Manage course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}
                placeholder="Title"
            />
        </form>
    )
}

export default CourseForm;