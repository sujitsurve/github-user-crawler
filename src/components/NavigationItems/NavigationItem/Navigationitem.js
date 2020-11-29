import React from 'react';

import { NavLink } from 'react-router-dom';

const navigationItem = (props) => {
let link = <NavLink to={props.link} exact={props.exact} >{props.children}</NavLink>
if(props.isImage){
    link = <img src={props.src} alt='MyBurger'/>
}
return (
    <li>
        {link}
    </li>
)
}

export default navigationItem;