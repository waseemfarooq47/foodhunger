import React,{Component} from 'react';
import './filter.css'
import axios from 'axios';

// const url ="https://kashkart.herokuapp.com/filter/3?cuisine=3";
const url ="https://kashkart.herokuapp.com/filter";

class SortFilter extends Component {

        sortFilter =(event)=>{
            let mealId = sessionStorage.getItem('mealId');
            let sortId = event.target.value;
            let filterUrl;
            if(sortId === ""){
                filterUrl = `${url}/${mealId}`
            }else{
                filterUrl = `${url}/${mealId}?sortKey=${sortId}`
            }
            axios.get(filterUrl)
            .then((res) => {this.props.restPerSort(res.data)})
            }

    render(){
        return(
            
            <div>
                <hr/>
                <div className="bg-light text-danger mt-4 cuisine-flt p-2">
                <center>Sort Filter</center>
                </div>
                <div className="radioButton " onChange={this.sortFilter}>
                    <label class="radio col-12">
                        <input type="radio" name="cuisine" value="-1"/> High To Low
                    </label>
                    <label class="radio col-12">
                    <input type="radio" name="cuisine" value="1"/> Low To High
                    </label>
                </div>
            </div>
        )
    }
}

export default SortFilter