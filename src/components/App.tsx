import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage';
import Header from './header/Header';
import { StoreState } from '../models/index';

export interface AppPropTypes {
    loading?: boolean;
}

class App extends React.Component<AppPropTypes>{
    render(): JSX.Element {
        return (
            <div className="container-fluid">
                <Header loading={this.props.loading}></Header>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/courses" component={CoursesPage}></Route>
                <Route path="/course" component={ManageCoursePage} exact></Route>
                <Route path="/course/:id" component={ManageCoursePage}></Route>
                <Route path="/about" component={AboutPage}></Route>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState, ownProps: any) => {
    return {
        loading: state.ajaxCallsCount > 0
    }
}

export default withRouter(connect(mapStateToProps)(App));