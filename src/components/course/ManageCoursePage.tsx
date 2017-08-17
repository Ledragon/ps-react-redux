import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

interface ManageCoursePageState {

}
interface ManageCoursePageProps {
    actions: {};
    prop: any;
}

class ManageCoursePage extends React.Component<ManageCoursePageProps, ManageCoursePageState> {
    constructor(props: ManageCoursePageProps, context: any) {
        super(props, context);

    }
    render(): false | JSX.Element {
        return (
            <CourseForm></CourseForm>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators(courseActions as any, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)