import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {useTransition, animated} from 'react-spring';
import NavigationMenu from './NavigationMenu';


function Navigation(){

    const [showMenu, setshowMenu] = useState(false);
    let menu;
    if(showMenu){
        menu = <NavigationMenu 
                    closeMenu={() => setshowMenu(false)}
                />
    }

    const transitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(100%)'},
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(100%)' },
        })

    return (
       <nav className="navicon">
           <span>
           <FontAwesomeIcon 
                icon={faBars}
                size="2x"
                onClick={() => setshowMenu(!showMenu)}
           />
           </span>
           
           
           {transitions.map(({ item, key, props }) =>
            item && 
            <animated.div 
                key={key} 
                style={props}
                >
                    {menu}
            </animated.div>
            )}
       </nav>
    )
}

export default Navigation;