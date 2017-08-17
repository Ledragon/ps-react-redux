import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, RouteProps } from 'react-router-dom';

import { Course } from '../../models/course';
import { StoreState } from '../../models/storeState';
import * as courseActions from '../../actions/courseActions';
import CourseTable from './CourseTable';

interface ICoursesPageState {
    course: Course
}

interface ICoursesPageProps {
    courses: Array<Course>;
    actions: {
        createCourse: (course: Course) => void;
    };
    history: any;
}


class CoursesPage extends React.Component<ICoursesPageProps, ICoursesPageState> {
    constructor(props: ICoursesPageProps, context: any) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow(d: Course, i: number): JSX.Element {
        return <div key={i}>{d.title}</div>;
    }

    redirectToAddCoursePage() {
        this.props.history.push('/course');
    }

    render(): false | JSX.Element {
        return (
            <div>
                <h1>Courses</h1>
                <CourseTable courses={this.props.courses}></CourseTable>
                <button
                    className="btn btn-default"
                    type="submit"
                    onClick={this.redirectToAddCoursePage}>
                    Add course
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState, ownProps: any) => {
    return {
        courses: state.courses //refers to the reducer name
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators(courseActions as any, dispatch)
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CoursesPage));