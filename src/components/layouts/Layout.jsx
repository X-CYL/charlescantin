import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../micro/Navigation';

function Layout(){
    return(
        <div className ="layout"> 
            <Outlet />
        </div>
    )
}
export default Layout