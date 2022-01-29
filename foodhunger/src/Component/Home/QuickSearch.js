import React, { Component } from 'react';
import QuickDisplay from './QuickDisplay';
import './QuickSearch.css';
const mealUrl="https://kashkart.herokuapp.com/mealtype"

class QuickSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "mealTypes": ""
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="cards-container">
                            <span className="searchheading">Quick Search</span>
                            <span className="subtext">Explore Favorite Eatery </span>
                            <div className="row">
                            <QuickDisplay quickData={this.state.mealTypes}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    

    componentDidMount(){
        fetch(mealUrl, { method: "GET" })
        .then((res) => res.json())
        .then((data)=>{
            this.setState({mealTypes:data})
        })
    }
}

export default QuickSearch