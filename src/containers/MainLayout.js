import React from 'react';
import './MainLayout.css';
import AppNavBar from './AppNavbar';
import SideBar from './Sidebar';
import Home from './Home';
import Footer from './Footer';
import SidebarMenu from '../data/SidebarMenu';
import { Route, Switch } from 'react-router-dom';
import CounterArrow from '../components/CounterArrow';
import List from '../components/List'
import Error404 from '../components/Error404';
import { countries } from '../data/datas';
import ListMovies from '../components/ListMovies';
import {Student, Teacher} from '../components/Student';

const MainLayout = () => {
    return (
        <div className="container">

            <AppNavBar />
            <SideBar menus={SidebarMenu} />
            <Footer />

            <div className="main-content">
                <Switch>

                    <Route path="/" component={Home} exact />
                    <Route path="/counter" component={CounterArrow} exact />
                    <Route path="/list" exact >
                        <List data={countries} filterId="Garu"/>
                    </Route>
                    <Route path="/movies" exact >
                        <ListMovies/>
                    </Route>
                    <Route path="/student" exact >
                        <Student nim="912" nama="Andi"/>
                    </Route>
                    <Route component={Error404} />

                </Switch>
            </div>

        </div>
    )
}

export default MainLayout;
