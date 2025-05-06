import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class ServicesBoxs1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEvents: [
                {
                    id: 1,
                    classicon: 'icon-rounded clipboard',
                    title: 'Web Development',
                    description: "FlarewaveAI developers create custom web application solutions. We deliver web appearance to help you grow your business using the best technologies possible.", 
                },
                {
                    id: 2,
                    classicon: 'icon-rounded line-chart',
                    title: 'UI/UX Design',
                    description: 'Starting from concept, visual identity, detailed architecture and UI/UX design, our team delivers gleaming experiences for maximum user engagement.',
                },
                {
                    id: 3,
                    classicon: 'icon-rounded clock',
                    title: 'Digital Marketing',
                    description: 'Our Digital Marketing experts help you with secured & stable infrastructure management for Continuous integration and Continuous Delivery.',
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

export default ServicesBoxs1;