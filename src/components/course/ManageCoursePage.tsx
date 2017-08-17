import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import { Course } from '../../models/course';

interface ManageCoursePageState {
    course: Course;
    errors?: any;
}

interface ManageCoursePageProps {
    course: Course;
}

class ManageCoursePage extends React.Component<ManageCoursePageProps, ManageCoursePageState> {
    constructor(props: ManageCoursePageProps, context: any) {
        super(props, context);

        this.onSave = this.onSave.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
    }

    onSave(event: React.FormEvent<HTMLButtonElement>) {

    }
    onChange(event: React.FormEvent<any>) {

    }

    render(): false | JSX.Element {
        return (
            <div>
                <h1>Manage course</h1>
                <CourseForm
                    course={this.state.course}
                    errors={this.state.errors}
                    allAuthors={[]}
                    loading={false}
                    onChange={this.onChange}
                    onSave={this.onSave}
                ></CourseForm>
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    let course: Course = {
        id: '',
        authorId: '',
        category: '',
        length: '',
        title: '',
        watchHref: ''
    }
    return {
        course
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators(courseActions as any, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)