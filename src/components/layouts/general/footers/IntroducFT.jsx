import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class IntroducFT extends Component {
    render() {
        return (
            <div className="widget-about">
                <div id="logo-ft">
                    <Link to="index.html"><img src="images/logo/logo-ft.png" alt="bookflare" width={157} height={29}
                        data-retina="images/logo/logo-ft@2x.png" data-width={200} data-height={29} /></Link>
                </div>
                <p className="description">We deliver web and mobile development services to all type of businesses,
                with 100% project delivery success.</p>
                <div className="list-info">
                    <ul>
                        <li className="address">
                            <Link to="#">Plot no. 3 dr. Rajendra Prasad Colony Near Kamla Nehru Nagar, Ajmer Road Bypass, Jaipur</Link>
                        </li>
                        <li className="phone">
                            <a href="tel:+919717710928">+91 - 9717710928</a>
                        </li>
                        <li className="mail">
                            <a href="mailto:flarewaveai@gmail.com">flarewaveai@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div className="socails">
                    <ul className="list">
                        <li>
                            <Link to="#"><span className="fa fa-twitter" /></Link>
                        </li>
                        <li>
                            <Link to="#"><span className="fa fa-linkedin-square" /></Link>
                        </li>
                        <li>
                            <Link to="#"><span className="fa fa-facebook-official" /></Link>
                        </li>
                        <li>
                            <Link to="#"><span className="fa fa-skype" /></Link>
                        </li>
                        <li>
                            <Link to="#"><span className="fa fa-pinterest-square" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default IntroducFT;