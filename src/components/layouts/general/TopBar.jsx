import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class TopBar extends Component {
    render() {
        return (
            <div className="top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="flat-infomation">
                                <li className="phone">Call us: <a href="tel:+919717710928" title="phone">+91 - 9717710928</a></li>
                                <li className="email">Email: <a href="mailto:flarewaveai@gmail.com" title="email">flarewaveai@gmail.com</a></li>
                            </ul>
                            <div className="flat-questions">
                                <Link to="/contact" onClick={() => {window.location.href="/contact"}} title="" className="questions">Have any questions?</Link>
                                <Link to="/contact" onClick={() => {window.location.href="/contact"}} title="" className="appointment">Contact Us</Link>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
		    </div>
        );
    }
}

export default TopBar;