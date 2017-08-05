import * as React from 'react';
import { NavLink } from 'react-router-dom';

export interface IHeaderProps {

}

class Header extends React.Component<IHeaderProps>{
    render(): false | JSX.Element {
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' activeClassName='active'>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/courses' activeClassName='active'>
                            Courses
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;