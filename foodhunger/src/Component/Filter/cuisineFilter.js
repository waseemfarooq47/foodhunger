import React,{Component} from 'react';
import './filter.css'
import axios from 'axios';

// const url ="https://kashkart.herokuapp.com/filter/3?cuisine=3";
const url ="https://kashkart.herokuapp.com/filter";

class CuisineFilter extends Component {

    cuisineFilter =(event)=>{
        let mealId= this.props.mealId;
        let cuisineId= event.target.value;
        let filterUrl;
        if(cuisineId === ""){
            filterUrl = `${url}/${mealId}`
        }else{
            filterUrl = `${url}/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(filterUrl)
        .then((res) => {this.props.restPerCuisine(res.data)})
    }

    render(){
        return(
            <div>
                <div className="bg-light text-danger mt-4 cuisine-flt p-2">
                    <center>Cuisine Filter</center>
                </div>
                <div className="radioButton mt-3" onChange={this.cuisineFilter}>
                    <label class="radio col-12 ">
                        <input type="radio" name="cuisine" value=""/> All
                    </label>
                    <label class="radio col-12">
                        <input type="radio" name="cuisine" value="1"/> North Indian
                    </label>
                    <label class="radio col-12">
                        <input type="radio" name="cuisine" value="2"/> South Indian
                    </label>
                    <label class="radio col-12">
                        <input type="radio" name="cuisine" value="3"/> Chinese
                    </label>
                    <label class="radio col-12">
                        <input type="radio" name="cuisine" value="4"/> Fast Food
                    </label>
                    <label class="radio col-12">
                        <input type="radio" name="cuisine" value="5"/> Street Food
                    </label>
                </div>
            </div>
        )
    }
}

export default CuisineFilter