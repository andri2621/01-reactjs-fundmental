import React from 'react';

 const AppNavBar = () => {
    return (
        <div className="nav-top">
            <ul>
                <li className="logo"><a><img src="./assets/images/codeid.png" /></a></li>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    );
}

export default AppNavBar;