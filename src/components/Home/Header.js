import React from 'react';

import logo from '../../assets/img/logo.png';

export const Header = () => {
    return (
        <header className="main_menu home_menu">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="/"> <img src={ logo } alt="logo" /> </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse main-menu-item justify-content-end"
                                id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/menu">Menu</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/chefs">Chefs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu_btn">
                                <a href="/" className="btn_1 d-none d-sm-block">book a tabel</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
