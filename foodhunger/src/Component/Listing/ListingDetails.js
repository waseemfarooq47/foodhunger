import React from 'react'
import {Link} from 'react-router-dom'
import './listingDetails.css'
const ListingDetails = (props) => {
    const renderData = ({ restData }) => {
        if (restData) {
            if(restData.length > 0) {

            
            return restData.map((item)=>{
            return (
                <>
                <div className="col-12 mt-3">
                    <div className="card">
                        <div class="row g-0">
                            <div class="col-md-4" style={{backgroundColor:"#000000"}}>
                                <img src={item.restaurant_thumb} class="img-fluid rounded-start" alt={item.restaurant_name} style={{height:"150px",width:"100%"}}/>
                                <div className="text-center rate-text pt-5 text-danger">{item.rating_text}</div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title cc-meal">{item.restaurant_name}</h5>
                                    <p class="card-text">{item.address}</p>
                                    <p class="card-text">Rating: <small class="text-muted ">{item.average_rating} stars</small></p>
                                    <p className="card-text">Cost : <bold>&#x20B9; {item.cost}</bold> / 2 person</p>
                                    <span class="badge bg-danger me-3">{item.mealTypes[0].mealtype_name}</span>
                                    <span class="badge bg-warning me-3 text-dark">{item.mealTypes[1].mealtype_name}</span>
                                    <span class="badge bg-info me-3 text-dark">{item.cuisines[0].cuisine_name}</span>
                                    <span class="badge bg-success me-3 text-white">{item.cuisines[1].cuisine_name}</span>
                                    <div className="mt-3">
                                        <Link to={`/detail/${item.restaurant_id}`} className="btn btn-success">Proceed</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>   
                </>
            )
            })
        }else{
            return(
                <div className="alert alert-danger text-center" role="alert">
                    <h3>No Data Found</h3>
                </div>
            )
        }  
        }else{
            return(
                <div>
                    <img src="/image/loaders.gif" alt="loader"/>
                </div>
            )
        }

    }
    return (
            <>
            {renderData(props)}
            </>
      
    )

}

export default ListingDetails