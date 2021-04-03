import React from 'react';

// Componentes Reciclados
import { OurHistory } from '../components/Reciclados/OurHistory';
import { Video } from '../components/Reciclados/Video';
import { Menu } from '../components/Reciclados/Menu';
import { Chefs } from '../components/Reciclados/Chefs';
import { Testimonials } from '../components/Reciclados/Testimonials';
import { Footer } from '../components/Reciclados/Footer';

// Componentes de la Página
import { Header } from '../components/Home/Header';
import { Banner } from '../components/Home/Banner';
import { PopularDishes } from '../components/Home/PopularDishes';
import { Reservation } from '../components/Home/Reservation';
import { Blog } from '../components/Home/Blog';

export const HomePage = () => {
    return (
        <>
            <Header />
            <Banner />
            <PopularDishes />
            <OurHistory />
            <Video />
            <Menu />
            <Chefs />
            <Reservation />
            <Testimonials />
            <Blog />
            <Footer />
        </>
    )
}
