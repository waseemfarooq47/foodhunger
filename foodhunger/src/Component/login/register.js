import React, { Component } from 'react';
import Header from '../Header';
import './login.css'
// const registerUrl = "http://localhost:5000/api/auth/register";
const registerUrl = "https://developerjwt.herokuapp.com/api/auth/register";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            name:'Your Name',
            phone:'',
            email:'example@example.com',
            password:''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit =(event) => {
        fetch(registerUrl,{
            method: "POST",
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(this.props.history.push('/login'))

    }


    render() {
        return (
            <>
                <Header/>
           
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12 m-auto  mt-5">
                        <div className="card">
                            <div className="card-header log-title bg-dark  text-white text-center">Registrtaion</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-10 col-12 m-auto">
                                        <div className="form-control log-cc">
                                            <label>Name</label>
                                            <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />

                                            <label className="pt-4">Email</label>
                                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />

                                            <label className="pt-4">Phone</label>
                                            <input className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} />
                                            
                                            <label className="pt-4">Password</label>
                                            <input className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="col-12 text-center mt-4">
                                        <button className="btn btn-success mn-btn" onClick={this.handleSubmit}>
                                        <i className="fa fa-users me-3"></i>Register
                                        </button>
                                    </div>
                                
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }

    componentDidMount() {
        
    }
}

export default Register;