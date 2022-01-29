import React, { Component } from "react";
import './details.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import MenuList from './menuDetail'
import Header from '../Header';
const url = "https://kashkart.herokuapp.com/restaurants"
const menuUrl="https://kashkart.herokuapp.com/menu"

class Details extends Component {
    constructor(props) {
        super()
        this.state = {
            details: "",
            menuList: "",
            userItem: ""
        }
    }



    addToCart=(data)=>{
        this.setState({userItem:data})
    }

    proceed =()=>{
        sessionStorage.setItem('menu',this.state.userItem);
        this.props.history.push(`/PlaceOrder/${this.state.details.restaurant_name}`)
    }
    render() {
        let { details } = this.state;
        return (
            <>
                <Header/>
                <div className=" container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card mt-4">
                                <div class="card-header bg-dark menu-det pt-3">
                                        <h4>Menu Details</h4>
                                </div>
                                <div class="row g-0">
                                    <div class="col-md-4 mimg-cover">
                                        <div className="round-div">
                                            <img src={details.restaurant_thumb} class="img-fluid rounded-start" alt={details.restaurant_name}  style={{height:"100%"}}/>
                                        </div>
                                    </div>
                                    <div class="col-md-8 text-center">
                                        <div class="card-body">
                                            <h5 class="card-title menu-ccdet">{this.state.details.restaurant_name}</h5>
                                            <p>
                                                <i className="fas fa-star checked"></i>
                                                <i className="fas fa-star checked"></i>
                                                <i className="fas fa-star checked"></i>
                                                <i className="fas fa-star checked"></i>
                                                <i className="far fa-star"></i>
                                                <span className="ps-4">289 Customer Reviews</span>
                                            </p>
                                            <h6><strike>Old Price &#8377; 180</strike></h6>
                                            <h6>New Price &#8377; {details.cost}</h6>
                                            <h6>Customer Review: <span className="text-danger pl-3"><b>{details.rating_text}</b></span></h6>

                                            <div>
                                                <div class="icon">
                                                    <img src="https://i.ibb.co/0KzLdwC/No-contact-delivery-final-CB432269791.png" alt="icon" />
                                                    <p>Contact Less Delivery</p>
                                                </div>
                                                <div class="icon">
                                                    <img src="https://i.ibb.co/kgcsZ3z/icon-amazon-delivered-CB485933725.png" alt="icon" />
                                                    <p>Free Home Delivery</p>
                                                </div>
                                            </div>
                                            <h5 class="stock">
                                                Available Now
                                            </h5>
                                            <div>
                                                <button class="btn btn-atc">Back</button>
                                                <button class="btn btn-checkout" onClick={this.proceed}>Checkout</button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer pt-4 pb-5">
                                    <Tabs>
                                        <TabList className="tab-tags">
                                            <Tab>Details</Tab>
                                            <Tab>Contact</Tab>
                                            <Tab>Menu</Tab>
                                        </TabList>

                                        <TabPanel className="p-2">
                                            <h4 className="menu-restname">{details.restaurant_name}</h4>
                                            <p className="menudet">
                                            {details.restaurant_name} Good time, Great taste Expect the best Eat healthy, Live more Food, Folks and Our Quality is best The magic grill Food at first sight Dreamy Taste.One thousand flavors in one place.Taste is our identity Where food speaks with your palate.I know what is good.Only for foodies Like Mom’s house
                                            </p>
                                        </TabPanel>
                                        <TabPanel className="p-2">
                                            <h4 className="menu-restname">{details.address}</h4>
                                            <h5>For Contact:  (900 2334 900)</h5>
                                        </TabPanel>
                                        <TabPanel>
                                            <MenuList menuData={this.state.menuList} finalOrder={(data)=>{this.addToCart(data)}}/>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-ms-12">

                </div>
            </>
        )
    }

    async componentDidMount() {
        const restId = this.props.match.params.id;
        const response = await axios.get(`${url}/${restId}`)
        const menuResponse = await axios.get(`${menuUrl}/${restId}`)
        this.setState({ details: response.data[0],menuList:menuResponse.data })
    }

}

export default Details
