import * as React from 'react';
import { connect } from 'react-redux';

import { Course } from '../../models/course';
import { StoreState } from '../../models/storeState';
import * as courseActions from '../../actions/courseActions';

interface ICoursesPageState {
    course: Course
}

interface ICoursesPageProps {
    courses: Array<Course>;
    dispatch: (action: any) => void;
}


class CoursesPage extends React.Component<ICoursesPageProps, ICoursesPageState> {
    constructor(props: ICoursesPageProps, context: any) {
        super(props, context);

        this.state = {
            course: {
                title: ''
            }
        }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event: React.FormEvent<HTMLInputElement>) {
        const course = this.state.course;
        course.title = event.currentTarget.value;
        this.setState({ course: course });
    }

    onClickSave(event: React.FormEvent<HTMLButtonElement>) {
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(d: Course, i: number): JSX.Element {
        return <div key={i}>{d.title}</div>;
    }

    render(): false | JSX.Element {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add course</h2>
                <div className="form-group">
                    <input type="text"
                        className="form-control input-sm"
                        onChange={this.onTitleChange}
                        value={this.state.course.title} />
                    <button
                        onClick={this.onClickSave}
                        className="btn btn-default btn-sm">Save</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: StoreState, ownProps: any) {
    return {
        courses: state.courses //refers to the reducer name
    };
}

function mapDispatchToProps() {

}

export default connect(mapStateToProps)(CoursesPage);