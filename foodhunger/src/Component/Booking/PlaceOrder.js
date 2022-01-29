import React, { Component } from 'react';
import './placeOrder.css'
import Header from '../Header';
const menuUrl = "https://kashkart.herokuapp.com/menuItem";
const placeOrder = "https://kashkart.herokuapp.com/placeOrder"

class PlaceOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Math.floor(Math.random() * 100000),
            rest_name: this.props.match.params.restName,
            name:localStorage.getItem('userdata')?localStorage.getItem('userdata').split(',')[0]:'',
            phone:localStorage.getItem('userdata')?localStorage.getItem('userdata').split(',')[2]:'',
            email:localStorage.getItem('userdata')?localStorage.getItem('userdata').split(',')[1]:'',
            cost: 0,
            address: 'hno223',
            menuItems: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit =(event) => {
        var obj= this.state
        obj.details=sessionStorage.getItem('menu')
        delete obj.menuItems
        console.log(obj)
        fetch(placeOrder,{ 
            method: "POST",
            method: "POST",
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        // .then(this.props.history.push('/viewBooking'))
        .then(()=>{console.log('going for payment')})

    }

    renderItems = (data) => {
        if (data) {
            return data.map((item, index) => {
                return (
                    <div className="orderItems pt-5" key={index}>
                        <div className="img-cprd">
                          <img src={item.img} alt={item.name} />  
                        </div>
                        <div className="ord-name pt-3 text-center">
                            {item.name}
                        </div>
                    </div>
                )
            })
        }
    }


    render() {
        if(localStorage.getItem('ltk') == null){
            return(
                <>
                <Header/>

                    <div className="col-md-8 col-12 m-auto mt-4 alert alert-danger text-center" role="alert">
                        <h4>Login First to Place Booking</h4>
                    </div>
                
                </>
            )
           

        }
        return (
            <>
                <Header/>
            
            <div className="container">
                <div className="row">
                    <div className="col-12 pt-5 ">
                        <div className="card pb-5">
                            <div className="card-header pp-title bg-dark text-white p-3 text-center">Place Orders</div>
                            <div className="card-body">
                                <form action="http://zompay.herokuapp.com/paynow" method="post">
                                <div className="row">
                                    <div className="col-6 mt-3">
                                        <div className="form-control plc-crd">
                                            <label>Name</label>
                                            <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-6 mt-3">
                                        <div className="form-control plc-crd">
                                            <label>Email</label>
                                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-6 mt-3">
                                        <div className="form-control plc-crd">
                                            <label>Phone</label>
                                            <input className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-6 mt-3">
                                        <div className="form-control plc-crd">
                                            <label>Address</label>
                                            <input className="form-control" name="address" value={this.state.address} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="col-12 mt-5">
                                    {this.renderItems(this.state.menuItems)}
                                    <input type="hidden" name="amount" value={this.state.cost} />
                                    <input type="hidden" name="id" value={this.state.id} />
                                    <input type="hidden" name="hotel_name" value={this.state.rest_name} />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-12  ord-costt p-3 m-auto mt-4 text-center bg-light">
                                            <h2 className="pt-3">Total Cost is : 	<span className="text-dark mn-amount">&#8377;{this.state.cost}</span></h2>
                                        </div>
                                    </div>
                                    <div className="text-center mt-3">
                                        <button className="btn btn-success text-center mn-btn" onClick={this.handleSubmit}
                                            type="submit">
                                            <i className="fa fa-first-order fa-spin me-2 "></i>Place order
                                        </button>
                                    </div>
                                   
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }

    componentDidMount() {
        console.log('>>>', sessionStorage.getItem('menu'))
        let menuItem = sessionStorage.getItem('menu');
        let menuId = []
        menuItem.split(',').map((item) => {
            menuId.push(parseInt(item))
            return 'ok'
        })
        fetch(menuUrl, {
            method: "POST",
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(menuId)
        }
        )
            .then((res) => res.json())
            .then((data) => {
                let menuDetails = [];
                let totalPrice = 0;
                data.map((item) => {
                    var myObj = {}
                    totalPrice = totalPrice + parseInt(item.menu_price)
                    myObj.name = item.menu_name;
                    myObj.img = item.menu_image
                    menuDetails.push(myObj);
                    return 'ok'
                })
                this.setState({ cost: totalPrice, menuItems: menuDetails })
            })
    }
}

export default PlaceOrder;