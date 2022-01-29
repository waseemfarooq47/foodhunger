import React from 'react'
import { Link } from 'react-router-dom'
import './QuickSearch.css'
const QuickDisplay = (props) => {

    const renderMeals = ({ quickData }) => {
        if (quickData) {
            return quickData.map((item) => {
                return (
                    <div className="col-lg-3  col-sm-12  mt-5  ">
                        {/* <Link to="/" key={item.mealtype_id}> */}
                        {/* <div className="card cards-matter">
                                <div class="backgroundEffect"></div>
                                    <div className="img-cover">
                                    <img src={item.meal_image} className="card-img-top ctop" alt={item.mealtype}/>  
                                    </div>
                                    
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{item.mealtype}</h5>
                                        <p className="card-text">{item.content}</p>

                                        <div className="text-center">
                                            <Link to={`/list/${item.mealtype_id}`}  key={item.mealtype_id} className="btn btn-success orderbtn mt-3">
                                                <i className="fa fa-shopping-cart me-3" aria-hidden="true"></i>Order now
                                            </Link>
                                        </div>
                                        
                                        
                                    </div>
                                </div> */}
                        {/* </Link>     */}
                        <div className="card  menu-tile border-0 me-lg-4 mb-lg-0 mb-4">
                            <div className="backgroundEffect"></div>
                            <div className="pic"> <img className="" src={item.meal_image} alt={item.mealtype}></img>
                            </div>
                            <div className="content">
                                <p className="h-1 mt-4 title-menu">{item.mealtype}</p>
                                <p className="text-muted mt-3">{item.content}</p>
                                <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                                    <Link to={`/list/${item.mealtype_id}`} key={item.mealtype_id} >
                                        <div className="btn btn-primary">Order Now<span className="fas fa-arrow-right"></span></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

    }



    return (
        <>
            {renderMeals(props)}
        </>
    )
}

export default QuickDisplay