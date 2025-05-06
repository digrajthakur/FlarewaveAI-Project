import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class EventBoxs2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEvents: [
                {
                    id: 4,
                    classicon: 'icon-rounded magic',
                    title: 'Mobile Apps',
                    description: 'We build intuitive and appealing Android, iOS and cross-platform apps for businesses, consumers and enterprises.',
                },
                {
                    id: 5,
                    classicon: 'icon-rounded global',
                    title: 'Software/ERP Development',

                    description: 'FlarewaveAI services are tried and tested by multiple enterprises and gotten satisfaction in using our innovative services',
                },
                {
                    id: 6,
                    classicon: 'icon-rounded artboard',
                    title: 'DevOps',
                    description: 'Our DevOps experts help you with stable & secure infrastructure management for uninterrupted integration and Continuous Delivery for faster releases.',
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
                            <div className="iconbox-item">
                                <div className="iconbox style1">
                                    <div className="box-header">
                                        <div className={data.classicon}>
                                            
                                        </div>
                                        {/* <!-- /.icon-rounded --> */}
                                        <div className="box-title">
                                            <Link to="#" title="">{data.title}</Link>
                                        </div>
                                        {/* <!-- /.box-title --> */}
                                        </div>
                                        {/* <!-- /.box-header --> */}
                                    <div className="box-content">{data.description}</div>
                                    {/* <!-- /.box-content --> */}
                                </div>
                                 {/* <!-- /.iconbox --> */}
						    </div>
                            {/* <!-- /.iconbox-item --> */}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default EventBoxs2;