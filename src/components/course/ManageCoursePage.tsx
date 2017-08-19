import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as toastr from 'toastr';

import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import { Course, StoreState } from '../../models/index';

interface ManageCoursePageState {
    course: Course;
    errors?: any;
    redirect: boolean;
    saving: boolean;
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
            errors: {},
            redirect: false
            , saving: false
        };
    }

    componentWillReceiveProps(nextProps: ManageCoursePageProps) {
        if (this.props.course.id !== nextProps.course.id) {
            this.setState({ course: Object.assign({}, nextProps.course) }); // When f5 is hit
        }
    }

    onSave(event: React.FormEvent<HTMLButtonElement>) {
        event.preventDefault();
        this.setState({ saving: true });
        this.props.actions.saveCourse(this.state.course)
            .then(() => {
                this.setState({ redirect: true, saving: false });
                toastr.success('Course saved');
            })
            .catch(() => {
                toastr.error('Failed to save');
                this.setState({ saving: false });
            });

    }

    onChange(event: React.FormEvent<any>) {
        const field = event.currentTarget.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.currentTarget.value;
        return this.setState({ course: course });
    }

    render(): false | JSX.Element {
        if (this.state.redirect) {
            return <Redirect to="/courses" />;
        }
        return (
            <div>
                <h1>Manage course</h1>
                <CourseForm
                    course={this.state.course}
                    errors={this.state.errors}
                    allAuthors={this.props.authors}
                    loading={this.state.saving}
                    onChange={this.onChange}
                    onSave={this.onSave}
                ></CourseForm>
            </div>
        );
    }
}

function getCourseById(courses: Array<Course>, courseId: string): Course {
    var filtered = courses.filter(c => c.id === courseId);
    if (filtered.length > 0) {
        return filtered[0];
    }
    return {
        id: '',
        authorId: '',
        category: '',
        length: '',
        title: '',
        watchHref: ''
    };
}

const mapStateToProps = (state: StoreState, ownProps: any) => {
    const courseId = ownProps.match.params.id;
    let course: Course = {
        id: '',
        authorId: '',
        category: '',
        length: '',
        title: '',
        watchHref: ''
    };
    if (courseId) {
        course = getCourseById(state.courses, courseId);
    }
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage));