import React from "react";

export const BlogBody: React.FC = () => {
    return (
        <div className="blog">
            <div className="container">
                <div className="section-header text-center">
                    <p>Latest From Blog</p>
                    <h2>Learn More from Latest Barber Blog</h2>
                </div>
                <div className="row blog-page">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-1.jpg" alt="Blog" />
                            </div>
                            <div className="blog-meta">
                                <i className="fa fa-list-alt"></i>
                                <a href="">Hair Cut</a>
                                <i className="fa fa-calendar-alt"></i>
                                <p>01-Jan-2045</p>
                            </div>
                            <div className="blog-text">
                                <h2>Lorem ipsum dolor</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                                <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-2.jpg" alt="Blog" />
                            </div>
                            <div className="blog-meta">
                                <i className="fa fa-list-alt"></i>
                                <a href="">Beard Style</a>
                                <i className="fa fa-calendar-alt"></i>
                                <p>01-Jan-2045</p>
                            </div>
                            <div className="blog-text">
                                <h2>Lorem ipsum dolor</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                                <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-3.jpg" alt="Blog" />
                            </div>
                            <div className="blog-meta">
                                <i className="fa fa-list-alt"></i>
                                <a href="">Color & Wash</a>
                                <i className="fa fa-calendar-alt"></i>
                                <p>01-Jan-2045</p>
                            </div>
                            <div className="blog-text">
                                <h2>Lorem ipsum dolor</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                                <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-4.jpg" alt="Blog" />
                            </div>
                            <div className="blog-meta">
                                <i className="fa fa-list-alt"></i>
                                <a href="">Hair Cut</a>
                                <i className="fa fa-calendar-alt"></i>
                                <p>01-Jan-2045</p>
                            </div>
                            <div className="blog-text">
                                <h2>Lorem ipsum dolor</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                                <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-5.jpg" alt="Blog" />
                            </div>
                            <div className="blog-meta">
                                <i className="fa fa-list-alt"></i>
                                <a href="">Beard Style</a>
                                <i className="fa fa-calendar-alt"></i>
                                <p>01-Jan-2045</p>
                            </div>
                            <div className="blog-text">
                                <h2>Lorem ipsum dolor</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                                <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="img/blog-6.jpg" alt="Blog" />
                            </div>
                            <div className="blog-meta">
                                <i className="fa fa-list-alt"></i>
                                <a href="">Color & Wash</a>
                                <i className="fa fa-calendar-alt"></i>
                                <p>01-Jan-2045</p>
                            </div>
                            <div className="blog-text">
                                <h2>Lorem ipsum dolor</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                                </p>
                                <a className="btn" href="">Read More <i className="fa fa-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul> 
                    </div>
                </div>
            </div>
        </div>
    )
}