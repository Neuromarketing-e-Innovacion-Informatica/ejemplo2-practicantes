import React from 'react';

// Componentes Reciclados
import { HeaderDos } from '../components/Reciclados/HeaderDos';
import { Footer } from '../components/Reciclados/Footer';

// Componentes de la Página
import { Breadcrumb } from '../components/Contact/Breadcrumb';
import { Formulario } from '../components/Contact/Formulario';

export const ContactPage = () => {
    return (
        <> 
            <HeaderDos />
            <Breadcrumb />
            <Formulario />
            <Footer />
        </>
    )
}
