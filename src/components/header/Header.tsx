import * as React from 'react';
import { NavLink } from 'react-router-dom';

import LoadingDots from '../common/loadingDots';

export interface IHeaderProps {
    loading: boolean;
}

const Header = ({ loading }: IHeaderProps) => {
    // render(): false | JSX.Element {
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
                {loading ? <li><LoadingDots interval={100} dots={10} /></li> : null}
            </ul>
        </nav>
    );
    // }
}

export default Header;