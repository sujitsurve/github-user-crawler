import React from 'react';

import Aux from '../Auxiliary/Auxiliary';
import NavigationItems from '../../components/NavigationItems/NavigationItems'
const Layout = (props) => {
 
    return (
        <Aux>
            <NavigationItems />
            <main >
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;
