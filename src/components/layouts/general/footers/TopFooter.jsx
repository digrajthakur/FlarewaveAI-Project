import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopFooter extends Component {
    render() {
        return (
            <div className="widget-infomation">
                <ul className="infomation-footer">
                    <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:flarewaveai@gmail.com" title="">flarewaveai@gmail.com</a></li>
                    <li><i className="fa fa-phone" aria-hidden="true"></i><a href="tel:+919717710928" title="">+91 - 9717710928</a></li>
                    <li><i className="fa fa-map-marker" aria-hidden="true"></i><Link to="#" title="">Plot no. 3 dr. Rajendra Prasad Colony Near Kamla Nehru Nagar, Ajmer Road Bypass, Jaipur</Link></li>
                </ul>
                {/* <!-- /.infomation-footer --> */}
            </div>
            /* <!-- /.widget-infomation --> */
        );
    }
}

export default TopFooter;