import React from 'react';

// Componentes Reciclados
import { HeaderDos } from '../components/Reciclados/HeaderDos';
import { OurHistory } from '../components/Reciclados/OurHistory';
import { Testimonials } from '../components/Reciclados/Testimonials';
import { Chefs } from '../components/Reciclados/Chefs';
import { Footer } from '../components/Reciclados/Footer';

// Componentes de la Página
import { Breadcrumb } from '../components/About/Breadcrumb';

export const AboutPage = () => {
    return (
        <>
            <HeaderDos />
            <Breadcrumb />
            <OurHistory />
            <Testimonials />
            <Chefs />
            <Footer />
        </>
    )
}
