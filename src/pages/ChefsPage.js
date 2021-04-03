import React from 'react';

// Componentes Reciclados
import { HeaderDos } from '../components/Reciclados/HeaderDos'
import { Chefs } from '../components/Reciclados/Chefs'
import { Video } from '../components/Reciclados/Video'
import { Footer } from '../components/Reciclados/Footer'

// Componentes de la Página
import { Breadcrumb } from '../components/Chefs/Breadcrumb'

export const ChefsPage = () => {
    return (
        <>
            <HeaderDos />
            <Breadcrumb />
            <Chefs />
            <Video />
            <Footer />
        </>
    )
}
