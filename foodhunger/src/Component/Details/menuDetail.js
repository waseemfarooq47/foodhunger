import React, { Component } from 'react';
import './details.css'

class menuDetail extends Component {
    orderId = [];

    addItem = (id) => {
        this.orderId.push(`${id}`);
        this.props.finalOrder(this.orderId)
    }

    //for paticular delete 
    removeItem = (id) => {
        this.orderId.splice(this.orderId.indexOf(id.toString()), 1)
        this.props.finalOrder(this.orderId)
    }


    renderCart = (orders) => {
        if (orders) {
            return orders.map((item, index) => {
                return (
                    <b key={index}>{item}&nbsp; &nbsp;</b>
                )
            })
        }
    }



    renderMenu = ({ menuData }) => {
        if (menuData) {
            return menuData.map((item) => {
                return (
                    <div className="row" key={item.menu_id}>
                        <div className="col-md-7">
                            <div class="flex-container mt-3">
                                <div class="col-md-3 magenta pt-3">
                                <b>{item.menu_id}</b> &nbsp; &nbsp; <img src={item.menu_image} alt={item.menu_name} style={{ height: "60px", width: "60px" ,borderRadius:"50%"}} />
                                </div>

                                <div class="col-md-9 magenta pt-2 p-3">
                                <p className="menudet">{item.description}</p>
                                </div>
                            </div>

                            {/* <b>{item.menu_id}</b> &nbsp; &nbsp; <img src={item.menu_image} alt={item.menu_name} style={{ height: "60px", width: "60px" }} />
                            &nbsp; &nbsp; {item.menu_name} &nbsp; &nbsp; &#8377; {item.menu_price}
                            <p>{item.description}</p> */}
                        </div>

                        <div className="col-md-4 text-center pt-5">
                            <button className="cartBtn btn btn-primary" onClick={() => { this.addItem(item.menu_id) }}>
                                <i className="fas fa-plus"></i>
                            </button> &nbsp;
                            <button className="cartBtn btn btn-danger" onClick={() => { this.removeItem(item.menu_id) }}>
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <>
                <div className="col-md-12">
                    <h3 className="menu-restname">Item Added</h3>
                    <h5 className="menudet">Item Numbers &#10647; {this.renderCart(this.orderId)} &#10648; added</h5>
                </div>

                <div className="col-12">
                    {this.renderMenu(this.props)}
                </div>
            </>
        )
    }
}

export default menuDetail