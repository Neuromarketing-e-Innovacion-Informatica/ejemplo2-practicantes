import React from 'react';

// Componentes Reciclados
import { Footer } from '../components/Reciclados/Footer';
import { HeaderDos } from '../components/Reciclados/HeaderDos';

export const NoPage = () => {
    return (
        <>
            <HeaderDos />
            <section className="breadcrumb breadcrumb_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner text-center">
                                <div className="breadcrumb_iner_item">
                                    <h2>404</h2>
                                    <h2>Esta página no existe</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
