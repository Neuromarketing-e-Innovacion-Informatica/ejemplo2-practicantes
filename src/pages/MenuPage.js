import React from 'react';

// Componentes Reciclados
import { HeaderDos } from '../components/Reciclados/HeaderDos';
import { Menu } from '../components/Reciclados/Menu';
import { Video } from '../components/Reciclados/Video';
import { Footer } from '../components/Reciclados/Footer';

// Componentes de la Página
import { Breadcrumb } from '../components/Menu/Breadcrumb';

export const MenuPage = () => {
    return (
        <>
            <HeaderDos />
            <Breadcrumb />
            <Menu />
            <Video />
            <Footer />
        </>
    )
}
