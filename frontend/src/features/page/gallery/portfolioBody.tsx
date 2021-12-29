import React from "react";

export const PortfolioBody: React.FC = () => {
    return (
        <div className="portfolio">
            <div className="container">
                <div className="section-header text-center">
                    <p>Barber Image Gallery</p>
                    <h2>Some Images From Our Barber Gallery</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".first">Hair Cut</li>
                            <li data-filter=".second">Beard Style</li>
                            <li data-filter=".third">Color & Wash</li>
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first">
                        <div className="portfolio-wrap">
                            <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                <img src="img/portfolio-1.jpg" alt="Portfolio Image" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item second">
                        <div className="portfolio-wrap">
                            <a href="img/portfolio-2.jpg" data-lightbox="portfolio">
                                <img src="img/portfolio-2.jpg" alt="Portfolio Image" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item third">
                        <div className="portfolio-wrap">
                            <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                                <img src="img/portfolio-3.jpg" alt="Portfolio Image" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first">
                        <div className="portfolio-wrap">
                            <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                                <img src="img/portfolio-4.jpg" alt="Portfolio Image" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item second">
                        <div className="portfolio-wrap">
                            <a href="img/portfolio-5.jpg" data-lightbox="portfolio">
                                <img src="img/portfolio-5.jpg" alt="Portfolio Image" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item third">
                        <div className="portfolio-wrap">
                            <a href="img/portfolio-6.jpg" data-lightbox="portfolio">
                                <img src="img/portfolio-6.jpg" alt="Portfolio Image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}