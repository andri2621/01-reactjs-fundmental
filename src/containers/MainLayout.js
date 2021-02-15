import React from 'react';
import './MainLayout.css';
import AppNavBar from './AppNavbar';
import SideBar from './Sidebar';
import Home from './Home';
import Footer from './Footer';
import SidebarMenu from '../data/SidebarMenu';

const MainLayout = () => {
    return (
        <div className="container">

            <AppNavBar />
            <SideBar menus ={SidebarMenu}/>
            <Home/>
            <Footer/>

           {/*  <div className="nav-top">
                <ul>
                    <li className="logo"><a><img src="./assets/images/codeid.png" /></a></li>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>

            <div className="nav-side">
                <ul>
                    <li><a href="/counter">Project#1 Counter</a></li>
                    <li><a href="/layout">Project#2 Layout</a></li>
                    <li><a href="/list">Project#3 List</a></li>
                    <li><a href="/todo">Project#4 Todo</a></li>
                </ul>
            </div>

            <div className="main-content">
                <h1>Content</h1>
            </div>

            <div className="footer">
                <h3>&copy; CodeId Academy
                {(new Date()).getFullYear()}
                </h3>
            </div> */}



        </div>
    )
}

export default MainLayout;
