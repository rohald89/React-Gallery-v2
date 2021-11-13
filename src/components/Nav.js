import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav class="main-nav">
            <ul>
                <li>
                    <Link to="/cars">Cars</Link>
                </li>
                <li>
                    <Link to="/summer">Summer</Link>
                </li>
                <li>
                    <Link to="/winter">Winter</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
