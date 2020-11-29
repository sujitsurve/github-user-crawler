import React from 'react';

import NavigationItem from './NavigationItem/Navigationitem';
import GitLogo from '../../assets/Images/GitHub.png';
import './NavigationItems.css';

const navigationItems = (props) => (
    <ul className="topnav sticky">
        <NavigationItem link='/' exact isImage src={GitLogo}></NavigationItem>
        <NavigationItem link='/userlist'>Search Users</NavigationItem>
    </ul>
);

export default navigationItems;