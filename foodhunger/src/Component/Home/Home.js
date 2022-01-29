import React from "react";
import QuickSearch from './QuickSearch'
import Search from './Search'
import Header from '../Header';
import './Home.css'

const Home =(props)=>{
        console.log(">>>home",props)
        return(
            <>
                <Header/>
                <Search/>
                <QuickSearch/>
            </>
        )
    }

export default Home
