import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

/* components */
import Todolist from "./components/Todolist";
import Home from "./components/Home";
import Cards from "./components/Cards";

const App = () => {
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
                    </Routes>
                </main>

                <footer>
                    <ul className="main-footer">
                        <li>2022, Jc Andres</li>
                    </ul>
                    <ul className="nav-footer">
                        <li><Link to="reactjs-basic-practice-1/cards">Cards</Link></li>
                        <li><Link to="reactjs-basic-practice-1/todolist">Todo List</Link></li>
                    </ul>
                </footer>
            </>
    );
}


export default App;
