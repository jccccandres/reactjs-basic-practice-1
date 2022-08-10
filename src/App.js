import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

/* components */
import Todolist from "./components/Todolist";
import Home from "./components/Home";
import Cards from "./components/Cards";
import UserList from "./components/UserList";
import { useSelector } from "react-redux";

const App = () => {
    const users = useSelector(state => state.users);
    return (
            <>
                <header>
                    <nav className="navbar">
                        <ul className="main-nav">
                            <li><Link to="reactjs-basic-practice-1/">Home</Link></li>
                            <li className="parent-nav">
                                <a href="#!">Samples</a>
                                <ul className="nav-dropdown">
                                    <li><Link to="reactjs-basic-practice-1/cards">Cards</Link></li>
                                    <li><Link to="reactjs-basic-practice-1/todolist">Todo List</Link></li>
                                    <li><Link to="reactjs-basic-practice-1/user-list">User List</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <a href="https://jccccandres.github.io/" className="logo">jc.git</a>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="reactjs-basic-practice-1/" element={<Home />} />
                        <Route path="reactjs-basic-practice-1/cards" element={<Cards />} />
                        <Route path="reactjs-basic-practice-1/todolist" element={<Todolist />} />
                        <Route path="reactjs-basic-practice-1/user-list" element={<UserList />} />
                    </Routes>
                </main>

                <footer>
                    <ul className="main-footer">
                        <li>2022, Jc Andres</li>
                    </ul>
                    <ul className="nav-footer">
                        <li><Link to="reactjs-basic-practice-1/cards">Cards</Link></li>
                        <li><Link to="reactjs-basic-practice-1/todolist">Todo List</Link></li>
                        <li><Link to="reactjs-basic-practice-1/user-list">User List</Link></li>
                    </ul>
                    <ul className="main-footer">
                        <li>
                            {(users.info.name) ? 'Current user: ' + users.info.name : ''}
                            {(users.info.info1) ? ', ' + users.info.info1 : ''}
                            {(users.info.info2) ? ', ' + users.info.info2 : ''}
                        </li>
                    </ul>
                </footer>
            </>
    );
}


export default App;
