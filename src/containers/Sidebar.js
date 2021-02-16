import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = (props) => {
    const { menus } = props;
    return (
        <div className="nav-side">
            <ul>
                {
                        menus.map(data => {
                            return (<li >
                                <Link to={data.path} className="nav-side-link">{data.name}</Link>
                            </li>)
                        })

                }
            </ul>
        </div>
    );
}

export default SideBar;