import React from 'react';

import client1 from '../../assets/img/client/client_1.png';

export const Testimonials = () => {

    const data = [
        {
            id: 1,
            text: "Also made from. Give may saying meat there from heaven it lights face had is gathered god dea earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had amazing place",
            name: "Mosan Cameron",
            rol: "Executive of fedex",
            img: client1,
        },
        {
            id: 2,
            text: "Also made from. Give may saying meat there from heaven it lights face had is gathered god dea earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had amazing place",
            name: "Mosan Cameron",
            rol: "Executive of fedex",
            img: client1,
        },
        {
            id: 3,
            text: "Also made from. Give may saying meat there from heaven it lights face had is gathered god dea earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had amazing place",
            name: "Mosan Cameron",
            rol: "Executive of fedex",
            img: client1,
        }
    ];

    return (
        <section className="review_part gray_bg section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="section_tittle">
                            <p>Testimonials</p>
                            <h2>Customers Feedback</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-11">
                        <div className="client_review_part owl-carousel">
                            {
                                data.map(testimonio => (
                                    <div className="client_review_single media" key={testimonio.id}>
                                        <div className="client_img align-self-center">
                                            <img src={testimonio.img} alt=""/>
                                        </div>
                                        <div className="client_review_text media-body">
                                            <p>{testimonio.text}</p>
                                            <h4>{testimonio.name}, <span>{testimonio.rol}</span></h4>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="client_review_single media">
                                <div className="client_img align-self-center">
                                    <img src={ client1 } alt="" />
                                </div>
                                <div className="client_review_text media-body">
                                    <p>Also made from. Give may saying meat there from heaven it lights face had is gathered
                                        god dea earth light for life may itself shall whales made they're blessed whales
                                        also made from give
                                        may saying meat. There from heaven it lights face had amazing place</p>
                                    <h4>Mosan Cameron, <span>Executive of fedex</span></h4>
                                </div>
                            </div>
                            <div className="client_review_single media">
                                <div className="client_img align-self-center">
                                    <img src={ client1 } alt="" />
                                </div>
                                <div className="client_review_text media-body">
                                    <p>Also made from. Give may saying meat there from heaven it lights face had is gathered
                                        god dea earth light for life may itself shall whales made they're blessed whales
                                        also made from give
                                        may saying meat. There from heaven it lights face had amazing place</p>
                                    <h4>Mosan Cameron, <span>Executive of fedex</span></h4>
                                </div>
                            </div>
                            <div className="client_review_single media">
                                <div className="client_img align-self-center">
                                    <img src={ client1 } alt="" />
                                </div>
                                <div className="client_review_text media-body">
                                    <p>Also made from. Give may saying meat there from heaven it lights face had is gathered
                                        god dea earth light for life may itself shall whales made they're blessed whales
                                        also made from give
                                        may saying meat. There from heaven it lights face had amazing place</p>
                                    <h4>Mosan Cameron, <span>Executive of fedex</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
