import React, {useState} from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectCategoryState } from "../service/category";
import { listCategories } from "../service/service-dto";
import { listPortfolio } from "./portfolio-dto";
import { selectPortfolioState } from "./portfolioSlice";


export const PortfolioBody: React.FC = () => {
    const listArray = ["first", "second", "third"];
    const [show, setShow] = useState(4);
    const listPortfolio: listPortfolio = useAppSelector(selectPortfolioState).listPortfolio;
    const listCategories: listCategories = useAppSelector(selectCategoryState).categories;
    console.log(listPortfolio);
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
                            <li 
                                data-filter="*" 
                                className={show === 4? "filter-active": ""}
                                onClick={() => {setShow(4)}}>
                                    All
                            </li>
                            {listCategories.map((item) => {
                                return (
                                    <li 
                                        onClick={() => {
                                        setShow(item.cate_id)
                                        }} 
                                        key={item.cate_id} 
                                        className={show === item.cate_id ? "filter-active": ""}
                                        data-filter= {`.${listArray[item.cate_id-1]}`}>{item.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-container">
                    {listPortfolio.map((item) => {
                        return (
                            <div 
                                key={item.category.cate_id} 
                                className={`
                                    col-lg-4 col-md-6 col-sm-12 portfolio-item 
                                    ${listArray[item.category.cate_id-1]} 
                                    ${item.category.cate_id === show || show === 4 ? "": "d-none"}
                                `}
                            >
                                <div className="portfolio-wrap">
                                    <a 
                                        href={`${process.env.REACT_APP_SERVER_URL}${item.image}`} 
                                        data-lightbox="portfolio">
                                        <img src={`${process.env.REACT_APP_SERVER_URL}${item.image}`}alt="Portfolio Image" />
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