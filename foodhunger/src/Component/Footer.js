import React, { Component } from "react";
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <>
                <div className="col-12 mt-5 bg-dark">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <ul className="footerdet">
                                    <li>
                                        <h4 className="title-footer">Company</h4>
                                    </li>
                                    <li>Who We Are</li>
                                    <li>Contact</li>
                                    <li>Blogs</li>
                                    <li>Reports</li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <ul className="footerdet">
                                    <li>
                                        <h4 className="title-footer">For You</h4>
                                    </li>
                                    <li>Privacy</li>
                                    <li>Terms</li>
                                    <li>Sitemap</li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <ul className="footerdet">
                                    <li>
                                        <h4 className="title-footer">For Restaurants</h4>
                                    </li>
                                    <li>Add restaurant</li>
                                    <li>Business App</li>
                                    <li>Restaurant Widgets</li>
                                    <li>Products for Businesses</li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <ul className="footerdet">
                                    <li>
                                        <h4 className="title-footer">Social</h4>
                                    </li>
                                    <li><a href="">Facebook</a> </li>
                                    <li><a href="">Twitter</a> </li>
                                    <li><a href="">Instagram</a> </li>
                                    <li><a href="">Snapchat</a> </li>

                                </ul>
                            </div>
                            <hr />
                            <div className="col-12 text-center text-white">
                                &copy; <i className="fa fa-heart ms-3"></i> <span className="footname">Waseem Farooq</span>

                                <div className="social-handle">
                                    <div className="col-12">
                                    <a href="www facebook.com"> <img src="https://i.ibb.co/wyH9JxS/facebook.png" alt="facebook" /></a>
                                {/* <img src="image/youtube1.png" alt="yooutube" /> */}
                                <a href="www.instagram.com"><img src="https://i.ibb.co/w0kZ5Hf/insta.png" alt="instagram" /></a>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Footer