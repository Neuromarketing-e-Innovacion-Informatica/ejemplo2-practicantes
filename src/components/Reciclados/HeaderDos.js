import React from 'react';

import logo from '../../assets/img/logo.png';

export const HeaderDos = () => {
    return (
        <header class="main_menu">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <a class="navbar-brand" href="/"> <img src={ logo } alt="logo" /> </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse main-menu-item justify-content-end"
                                id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/about">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/menu">Menu</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/chefs">Chefs</a>
                                    </li>

                                    <li class="nav-item">
                                        <a class="nav-link" href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="menu_btn">
                                <a href="/" class="single_page_btn d-none d-sm-block">book a tabel</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
