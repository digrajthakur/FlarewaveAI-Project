import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class UsefulLink extends Component {
    render() {
        return (
            <div className="widget widget-services">
                <ul className="one-half first">
                    <li><Link to="/" onClick={() => {window.location.href="/"}} title="">Home</Link></li>
                    <li><Link to="/about-us" onClick={() => {window.location.href="/about-us"}} title="">About Us</Link></li>
                    <li><Link to="/services" onClick={() => {window.location.href="/services"}} title="">Services</Link></li>
                    {/* <li><Link to="/portfolio" onClick={() => {window.location.href="/portfolio"}} title="">Portfolio</Link></li>
                    <li><Link to="/contact" onClick={() => {window.location.href="/contact"}} title="">Contact</Link></li> */}
                </ul>
                {/* <!-- /.one-half --> */}
                <ul className="one-half">
                <li><Link to="/portfolio" onClick={() => {window.location.href="/portfolio"}} title="">Portfolio</Link></li>
                    <li><Link to="/contact" onClick={() => {window.location.href="/contact"}} title="">Contact</Link></li>
                    {/* <li><Link to="/" onClick={() => {window.location.href="/"}} title="">Home</Link></li>
                    <li><Link to="/blog" onClick={() => {window.location.href="/blog"}} title="">Blog</Link></li>
                    <li><Link to="blog-grid" onClick={() => {window.location.href="/blog-grid"}} title="">Blog Grid</Link></li>
                    <li><Link to="/contact" onClick={() => {window.location.href="/contact"}} title="">Contact 01</Link></li>
                    <li><Link to="/contact-v2" onClick={() => {window.location.href="/contact-v2"}} title="">Contact 02</Link></li> */}
                </ul>
                {/* <!-- /.one-half --> */}
            </div>
        /* <!-- /.widget-services --> */
        );
    }
}

export default UsefulLink;