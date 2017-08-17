import * as React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import ManageCoursePage from './course/ManageCoursePage';
import Header from './header/Header';

export interface AppPropTypes {
}

class App extends React.Component<AppPropTypes>{
    render(): JSX.Element {
        return (
            <div className="container-fluid">
                <Header></Header>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/courses" component={CoursesPage}></Route>
                <Route path="/course" component={ManageCoursePage} exact></Route>
                <Route path="/course/:id" component={ManageCoursePage}></Route>
                <Route path="/about" component={AboutPage}></Route>
            </div>
        );
    }
}

export default App;