import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectCategoryState } from "../service/category";
import { listCategories } from "../service/service-dto";


export const PortfolioBody: React.FC = () => {
    const listArray = ["first", "second", "third"];
    const listService:listCategories = useAppSelector(selectCategoryState).categories;
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
                            {listService.map((item) => {
                                return (
                                    <li key={item.cate_id} data-filter= {`.${listArray[item.cate_id-1]}`}>{item.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container">
                    {listService.map((item) => {
                        return (
                            <div className={`col-lg-4 col-md-6 col-sm-12 portfolio-item ${listArray[item.cate_id-1]}`}>
                                <div className="portfolio-wrap">
                                    <a href={`http://localhost:8000/${item.image_cate}`} data-lightbox="portfolio">
                                        <img src={`http://localhost:8000/${item.image_cate}`}alt="Portfolio Image" />
                                    </a>
                                </div>
                            </div>
                        )
                    })}
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