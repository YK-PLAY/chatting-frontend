import React from 'react';
import './Header.scss'

function Header({ location }) {
    if(location.pathname === '/login') {
        return null;
    }

    return (
        <header className='Header'>
            <strong>Header</strong>
            <ul>
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button>Profile</button>
                </li>
            </ul>
        </header>
    );
}

export default Header;