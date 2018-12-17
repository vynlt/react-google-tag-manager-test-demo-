import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const HeaderView = ({onLogout}) => {
	return (
                <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                                <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                        <ul className="navbar-nav w-100 justify-content-center">
                                <li className="nav-item">
                                        <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                        <a className="nav-link" href="/profile">Profile</a>
                                </li>
                                <li className="nav-item">
                                        <a className="nav-link" href="/about">About</a>
                                </li>
                        </ul>
                        </div>
                        <ul className="nav navbar-nav navbar-right justify-content-right">
                                <li>
                                <a href="/" onClick={onLogout} >
                                        <span className="glyphicon glyphicon-log-out"></span> Logout
                                </a>
                                </li>
                        </ul>
                </nav>
        );
}
export default HeaderView;