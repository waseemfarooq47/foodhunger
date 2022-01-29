import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './Header.css'
const url = "https://developerjwt.herokuapp.com/api/auth/userinfo";
class Header extends Component {
    constructor(props) {
        super()

        this.state={
            userdata:''
        }
    }

    handleLogout = () => {
        this.setState({userdata:''})
        localStorage.removeItem('userdata')
        localStorage.removeItem('ltk')
        this.props.history.push('/')
    }

    conditionlHeader = () => {
        if(this.state.userdata.name){
            let data = this.state.userdata;
            let outputArray = [data.name,data.email,data.phone,data.role]
            localStorage.setItem('userdata',outputArray)
            return(
                <>
                <button className="btn btn-success auth-btn">Hi {outputArray[0]}</button>
                <button onClick={this.handleLogout} className="btn btn-danger auth-btn">
                    Logout
                </button>
                </>
            )
        }else{
            return(
                <>
                    <Link to="/login" className="btn btn-success auth-btn">Login</Link>
                        <Link to="/register" className="btn btn-danger auth-btn">Register</Link>
                </>
            )
        }
    }
    
    render() {
        return (
            <>
                
                <header className="main-header bg-dark">
                    <div className="logo">
                        <Link to="/">
                        <span className="logoname"><a href="#">Food Hunger!</a></span>
                        </Link>
                        
                        
                    </div>
                    <div className="social-logo">
                        {this.conditionlHeader()}
                    </div>
                </header>
                       
            </>
        )
    }
    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':localStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userdata:data
            })
        })
    }
}

export default Header