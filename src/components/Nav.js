import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavStyles = styled.nav`
    li {
        width: 100%;
        margin-bottom: 1em;
    }

    a {
        display: block;
        background: #438bbd;
        border-radius: 3px;
        padding: 5px;
        color: #fff;
    }

    .active,
    a:hover {
        background-color: #275270;
    }

    @media only screen and (min-width: 768px) {
        ul {
            display: flex;
            justify-content: center;
        }

        li {
            margin: 10px;
            width: 100px;
        }
    }
`;

const Nav = () => {
    return (
        <NavStyles>
            <ul>
                <li>
                    <NavLink to="/search/cars">Cars</NavLink>
                </li>
                <li>
                    <NavLink to="/search/summer">Summer</NavLink>
                </li>
                <li>
                    <NavLink to="/search/winter">Winter</NavLink>
                </li>
            </ul>
        </NavStyles>
    );
};

export default Nav;
