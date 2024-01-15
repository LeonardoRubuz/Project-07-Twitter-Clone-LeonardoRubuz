import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Trends from './trends';

function Layout() {
    return (
        <>
            <div className="left-sidebar"/>
            <Sidebar />
            <main className="timeline">
                <Outlet />
            </main>
            <div className="right-sidebar" />
            <Trends />
        </>
    );
}

export default Layout;