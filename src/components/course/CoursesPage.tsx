import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
}


class CoursesPage extends React.Component<ICoursesPageProps, ICoursesPageState> {
    constructor(props: ICoursesPageProps, context: any) {
        super(props, context);
    }

    courseRow(d: Course, i: number): JSX.Element {
        return <div key={i}>{d.title}</div>;
    }

    render(): false | JSX.Element {
        return (
            <div>
                <h1>Courses</h1>
                <CourseTable courses={this.props.courses}></CourseTable>
            </div>
        );
    }
}

function mapStateToProps(state: StoreState, ownProps: any) {
    return {
        courses: state.courses //refers to the reducer name
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(courseActions as any, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);