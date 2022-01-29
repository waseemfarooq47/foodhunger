import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom';

const locationUrl="https://kashkart.herokuapp.com/location"
const restUrl="https://kashkart.herokuapp.com/restaurants?city="

class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            'locations':"",
            'restaurants':""
        }
    }

    renderCity=(data)=>{
        if(data){
            return data.map((item)=>{
                return (
                    <option key={item.location_id} value={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        }
    }


    renderRest =(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option key={item.restaurant_id} value={item.restaurant_id}>
                    {item.restaurant_name} | {item.address}
                </option>
                )
            })
        }
    }


    handleDetails=(event)=>{
        console.log('search',this.props)
        this.props.history.push(`/detail/${event.target.value}`)
    }

    handleRest =(e)=>{
        console.log(e.target.value)
        fetch(`${restUrl}${e.target.value}`,{method:"GET"})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({restaurants:data})
        })
    }


    render(){
        console.log("in render",this.state)
        return(
            <>
                <div className="col-lg-12 col-12 banner">
                    <div className="pt-5">
                        <div className="logoshake">
                            <img src="image/logo2.jpg" alt="logopic" />
                        </div>
                    </div>
                    
                    <div className="col-lg-7 col-md-6 col-12  m-auto tagbanner-cover">
                        <span className="ban-tagline">Search Delicious And Best Eatery Around You</span>
                    </div>

                    <div className="col-lg-7 col-md-6 col-12  m-auto selection">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12  p-2 select-cover">
                                <select id="city" onChange={this.handleRest} className="form-select selections">
                                        <option>---Select City---</option>
                                        {this.renderCity(this.state.locations)}
                                </select>

                            </div>
                            <div className="col-lg-6 col-md-6 col-12  p-2 select-cover  sel2">
                                <select id="eatery-items" className="form-select selections multiple" onChange={this.handleDetails}>
                                    <option value="">--Select Retaurant--</option>
                                    {this.renderRest(this.state.restaurants)}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    //onpage load call api using react methos ComponetDidMount()
    componentDidMount(){
        fetch(locationUrl,{method:"GET"})
        .then((res) => res.json())
        .then((data)=>{
            this.setState({locations:data})
        })
    }
}



export default withRouter(Search);