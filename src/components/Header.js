import React from 'react';
import Navigation from './Navigation';

function Header(){
    return (
        <header className="headerstyle">
            <span className="headertext"> MyWeatherApp</span>
            <Navigation />
        </header>
    )
}

export default Header;