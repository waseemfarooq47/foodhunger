import React, { Component } from 'react';
import axios from 'axios';
import ViewDisplay from './viewDisplay'
import Header from '../Header';
const bookUrl = "https://kashkart.herokuapp.com/orders"
const putUrl = "https://kashkart.herokuapp.com/orderStatus"

class viewApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: '',
            status: 'Pending'
        }
    }

    render() {
        if (localStorage.getItem('ltk') == null) {
            return (
                <>
                    <Header />
                    <div className="col-md-8 col-12 m-auto mt-4 alert alert-danger text-center" role="alert">
                        <h4>Login First to Place Booking</h4>
                    </div>
                </>
            )
        }
        return (
            <>
                <Header />
                <ViewDisplay bookData={this.state.orders} />
            </>
        )

    }
    componentDidMount() {
        if (this.props.location) {
            var qparams = this.props.location.search;
            if (qparams) {
                var data = {
                    "date": qparams.split('&')[2].split('=')[1],
                    "bank_status": qparams.split('&')[0].split('=')[1],
                    "bank": qparams.split('&')[3].split('=')[1],
                }

                var id = qparams.split('&')[1].split('=')[1].split('_')[1]
                fetch(`${putUrl}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then((res) => res.json())
                    .then((data) => {
                        this.setState({ status: 'Delivered' })
                    })

            }
        }
        axios.get(bookUrl).then((res) => {
            this.setState({ orders: res.data })
        })
    }
}







export default viewApi