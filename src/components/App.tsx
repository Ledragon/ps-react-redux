import * as React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import CoursesPage from './course/CoursesPage';
import Header from './header/Header';

export interface AppPropTypes {
}

class App extends React.Component<AppPropTypes>{
    render(): JSX.Element {
        return (
            <div className="container-fluid">
                <Header></Header>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/about" component={AboutPage}></Route>
                <Route path="/courses" component={CoursesPage}></Route>
            </div>
        );
    }
}

export default App;