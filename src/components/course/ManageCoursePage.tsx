import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import { Course, StoreState } from '../../models/index';

interface ManageCoursePageState {
    course: Course;
    errors?: any;
}

interface ManageCoursePageProps {
    course: Course;
    authors: { text: string, value: string }[];
    actions: {
        saveCourse: (course: Course) => any;
    };
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
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
    }

    onChange(event: React.FormEvent<any>) {
        const field = event.currentTarget.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.currentTarget.value;
        return this.setState({ course: course });
    }

    render(): false | JSX.Element {
        return (
            <div>
                <h1>Manage course</h1>
                <CourseForm
                    course={this.state.course}
                    errors={this.state.errors}
                    allAuthors={this.props.authors}
                    loading={false}
                    onChange={this.onChange}
                    onSave={this.onSave}
                ></CourseForm>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState, ownProps: any) => {
    let course: Course = {
        id: '',
        authorId: '',
        category: '',
        length: '',
        title: '',
        watchHref: ''
    };
    const formattedAuthors = state.authors.map(a => {
        return {
            text: `${a.firstName} ${a.lastName}`,
            value: a.id
        }
    });
    return {
        course,
        authors: formattedAuthors
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators(courseActions as any, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)