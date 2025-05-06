import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class EventBoxs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEvents: [
                {
                    id: 1,
                    srcimg: 'images/portfolio/web-ecom-04_sm.png',
                    title: 'Web Development',
                    description: 'Use our latest developed platform to showcase your products and give your brand an online presence', 
                },
                {
                    id: 2,
                    srcimg: 'images/portfolio/doctor-booking-app12_sm.png',
                    title: 'Mobile App Development',
                    description: 'Mobile development is a necessity of every business in digital world. Give your brand a portable identity',
                },
                {
                    id: 3,
                    srcimg: 'images/portfolio/banner-roller-02.png',
                    title: 'Graphics Designing',
                    description: 'Give your brand and unique graphical representation with our high skill graphics designs.',
                },
            ]
        }
    }
    
    render() {
        return (
            <div className="row">
                {
                    this.state.dataEvents.map(data => (
                        <div className="col-md-4" key={data.id}>
                            <div className="imagebox-item">
                                <div className="imagebox style1">
                                    <div className="imagebox-image">
                                        <img src={data.srcimg} alt="flarewaveAI" />
                                    </div>
                                    {/* <!-- /.imagebox-image --> */}
                                    
                                    <div className="imagebox-title">
                                        <h3><Link to="/" onClick={() => {window.location.href="/contact"}} title="">{data.title}</Link></h3>
                                    </div>
                                    {/* <!-- /.iamgebox-title --> */}
                                    <div className="imagebox-content">
                                        <div className="imagebox-desc">{data.description}</div>
                                        <div className="imagebox-button">
                                            <Link to="/" onClick={() => {window.location.href="/contact"}} title="">read more</Link>
                                        </div>
                                    </div>
                                    {/* <!-- /.imagebox-content --> */}
                                </div>
                                {/* <!-- /.imagebox --> */}
                            </div>
                            {/* <!-- /.imagebox-item --> */}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default EventBoxs;