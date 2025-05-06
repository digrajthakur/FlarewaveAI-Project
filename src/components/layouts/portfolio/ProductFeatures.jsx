import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class ProductFeatures extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            

            <div className="row">
                {
                    this.props.data.map((data, index) => {
                        return <div>
                            <div className="col-md-6"  style= {{ marginTop:15, marginBottom:20 }} >
                                <div className="iconbox-item">
                                    <div className="iconbox style1">
                                        <div className="box-header">
                                            <div className={data.className}>
                                            {/* expand arrows alternate */}
                                                
                                            </div>
                                            {/* <!-- /.icon-rounded --> */}
                                            <div className="box-title">
                                            {/* <i className='fa fa-phone'></i> */}
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
                            {/* if ( index > 0 && index % 3 == 0) { 
                                // { marginTop: 10 } : {}
                                
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="height80"></div>
                                    </div>
                                </div>
                            } */}
                        </div>

                    })
                }
            </div>
        );
    }
}

export default ProductFeatures;