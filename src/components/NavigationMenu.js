import React from 'react';
import {Link} from 'react-router-dom';

function NavigationMenu(props){
    return (
        <div className="popupmenu">
            <span>MyWeatherApp</span>
            <ul>
               <li>
                   <Link 
                        to="/"
                        onClick={props.closeMenu}
                        className="linkstyle"
                    >
                        Home
                    </Link>
                </li>
                <li>
                   <Link 
                        to="/weather"
                        onClick={props.closeMenu}
                        className="linkstyle"
                    >
                        Weather
                    </Link>
                </li>
               <li>
                   <Link 
                        to="/about"
                        onClick={props.closeMenu}
                        className="linkstyle"
                    >
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu;