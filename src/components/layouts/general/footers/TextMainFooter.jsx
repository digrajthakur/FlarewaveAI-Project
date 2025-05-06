import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TextMainFooter extends Component {
    constructor() {
        super();
        this.state = {
            linklogo: "/"
        }
    }
    render() {
        return (
            <div className="widget widget-text">
                <div id="logo" className="logo logo-footers" style={{ marginBottom: 20 }} >
                    <Link to="/" onClick={() => { window.location.href = this.state.linklogo }}><img src="images/logo-white.png" alt="flarewaveAI" width={200} height={29}
                        data-width={200} data-height={29} /></Link>
                </div>
                {/* logo*/}

                <p>
                    We deliver web and mobile development services to all type of businesses,
                    with 100% project delivery success.
                </p>
                {/* <p>
                    Hire the finest programmers at reasonable cost. 
                    Our design-focused perspective and project development processes 
                    help you to deliver the right solutions.
                </p>	 */}
            </div>
            /* <!-- /.widget-text --> */
        );
    }
}

export default TextMainFooter;