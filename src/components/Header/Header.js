import { useContext } from "react";
import { Link } from 'react-router-dom';

import "./style/header.css";
import { AuthContext } from "../../AuthContext/AuthContext";

export const Header = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);

    return (
        <div className="header-parent">
            <header className="header">
                <span className="logo">
                    <Link to="/"><span className="bolded">FIT</span>NESS</Link>
                </span>
                <nav className="navigation">
                    {isAuthenticated && (
                        <ul className="nav-items">
                            <li className="nav-item">
                                <span>{userEmail}</span>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link static" to="/">Forum</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/create">Create Topic</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/logout">Logout</Link>
                            </li>
                        </ul>
                    )}
                    {!isAuthenticated && (
                        <ul className="nav-items">
                            <li className="nav-item">
                                <Link className="nav-link static" to="/">Forum</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/register">Register</Link>
                            </li>
                        </ul>
                    )}
                </nav>
            </header>
        </div >
    );
};