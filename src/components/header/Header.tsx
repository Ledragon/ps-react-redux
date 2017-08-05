import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IHeaderProps {

}

class Header extends React.Component<IHeaderProps>{
    render(): false | JSX.Element {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to='about'>About</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;