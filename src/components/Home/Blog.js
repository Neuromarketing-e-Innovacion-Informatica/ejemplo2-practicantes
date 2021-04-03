import React from 'react';

import blog1 from '../../assets/img/blog/blog_1.png';
import blog2 from '../../assets/img/blog/blog_2.png';
import blog3 from '../../assets/img/blog/blog_3.png';
import left1 from '../../assets/img/icon/left_1.svg';

export const Blog = () => {

    const data = [
        {
            id: 1,
            date: "Apr 06, 2019",
            tag: "Food News",
            desc: "Adama kind deep gatherin first over fter his great",
            img: blog1
        },
        {
            id: 2,
            date: "Apr 06, 2019",
            tag: "Food News",
            desc: "Adama kind deep gatherin first over fter his great",
            img: blog2
        },
        {
            id: 3,
            date: "Apr 06, 2019",
            tag: "Food News",
            desc: "Adama kind deep gatherin first over fter his great",
            img: blog3
        }       
    ];

    return (
        <section className="blog_item_section blog_section section_padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="section_tittle">
                            <p>Recent News</p>
                            <h2>Latest From Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        data.map(blog => (
                            <div className="col-sm-6 col-lg-4" key={blog.id}>
                                <div className="single_blog_item">
                                    <div className="single_blog_img">
                                        <img src={ blog.img } alt=""/>
                                    </div>
                                    <div className="single_blog_text">
                                        <div className="date">
                                            <a href="/" className="date_item">{blog.date}</a>
                                            <a href="/" className="date_item"> <span>#</span> {blog.tag}</a>
                                        </div>
                                        <h3><a href="/blog">{blog.desc}</a></h3>
                                        <a href="/" className="btn_3">Read More <img src={ left1 } alt=""/></a>
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
