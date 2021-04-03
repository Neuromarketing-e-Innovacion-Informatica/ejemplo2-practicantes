import React from 'react';

import chefs1 from '../../assets/img/team/chefs_1.png';
import chefs2 from '../../assets/img/team/chefs_2.png';
import chefs3 from '../../assets/img/team/chefs_3.png';

export const Chefs = () => {

    const data = [
        {
            id: 1,
            name: "Adam Billiard",
            rol: "Chef Master",
            img: chefs1,
            facebook: "/",
            twitter: "/",
            instagram: "/",
            skype: "/"
        },
        {
            id: 2,
            name: "Fred Macyard",
            rol: "Chef Master",
            img: chefs2,
            facebook: "/",
            twitter: "/",
            instagram: "/",
            skype: "/"
        },
        {
            id: 3,
            name: "Justin Stuard",
            rol: "Chef Master",
            img: chefs3,
            facebook: "/",
            twitter: "/",
            instagram: "/",
            skype: "/"
        }
    ];

    return (
        <section className="chefs_part blog_item_section section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="section_tittle">
                            <p>Team Member</p>
                            <h2>Our Experience Chefs</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        data.map(chef => (
                            <div className="col-sm-6 col-lg-4" key={chef.id}>
                                <div className="single_blog_item">
                                    <div className="single_blog_img">
                                        <img src={chef.img} alt=""/>
                                    </div>
                                    <div className="single_blog_text text-center">
                                        <h3>{chef.name}</h3>
                                        <p>{chef.rol}</p>
                                        <div className="social_icon">
                                            <a href={chef.facebook}> <i className="ti-facebook"></i> </a>
                                            <a href={chef.twitter}> <i className="ti-twitter-alt"></i> </a>
                                            <a href={chef.instagram}> <i className="ti-instagram"></i> </a>
                                            <a href={chef.skype}> <i className="ti-skype"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
