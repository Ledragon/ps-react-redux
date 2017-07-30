import * as React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

export interface AppPropTypes {
}

class App extends React.Component<AppPropTypes>{
    render(): JSX.Element {
        return (
            <div className="container-fluid">
                <p>Header here...</p>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="about" component={AboutPage}></Route>
            </div>
        );
    }
}

export default App;