import React from 'react';

import fooditem1 from '../../assets/img/food_item/food_item_1.png';
import fooditem2 from '../../assets/img/food_item/food_item_2.png';
import fooditem3 from '../../assets/img/food_item/food_item_3.png';
import left2 from '../../assets/img/icon/left_2.svg';

export const PopularDishes = () => {

    const data = [
        {
            id: 1,
            title: "Indian Burger",
            desc: "Was brean shed moveth day yielding tree yielding day were female and ",
            img: fooditem1,
            link: "/",
        },
        {
            id: 2,
            title: "Cremy Noodles",
            desc: "Was brean shed moveth day yielding tree yielding day were female and ",
            img: fooditem2,
            link: "/",
        },
        {
            id: 3,
            title: "Honey Meat",
            desc: "Was brean shed moveth day yielding tree yielding day were female and ",
            img: fooditem3,
            link: "/",
        }
    ];
    return (
        <section className="exclusive_item_part blog_item_section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="section_tittle">
                            <p>Popular Dishes</p>
                            <h2>Our Exclusive Items</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        data.map(comida => (
                            <div className="col-sm-6 col-lg-4" key={comida.id}>
                                <div className="single_blog_item">
                                    <div className="single_blog_img">
                                        <img src={ comida.img } alt=""/>
                                    </div>
                                    <div className="single_blog_text">
                                        <h3>{ comida.title }</h3>
                                        <p>{ comida.desc }</p>
                                        <a href={ comida.link } className="btn_3">Read More <img src={ left2 } alt=""/></a>
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
