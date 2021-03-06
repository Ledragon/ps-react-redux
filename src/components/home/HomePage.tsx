import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IHomePageProps {

}

class HomePage extends React.Component<IHomePageProps>{
    render(): false | JSX.Element {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, Redux, and React Router in TypeScript for ultra-responsive web apps.</p>
                <Link to="about" className="btn btn-primary btn-lg">About</Link>
            </div>
        );
    }
}

export default HomePage;