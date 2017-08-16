import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

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
            <h1>Manage</h1>
        );
    }
}

const mapStateToProps = (state: any, ownProps: ManageCoursePageProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: bindActionCreators(courseActions as any, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage)