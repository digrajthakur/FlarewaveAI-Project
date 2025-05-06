import { React, Component } from 'react';
import { Link } from "react-router-dom";
import { Header, TopBar , Footer, Loader } from '../layouts/general';
import { ServicesBox1 } from '../layouts/general/services';
import { ServicesBox2 } from '../layouts/general/services';


class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: '/'
                }
            ],
            titleheading: [
                {
                    id: '1',
                    title: 'Services'
                }
            ],
            breadcrumbs: [
                {
                    id: 1,
                    title: 'Home',
                    classicon: 'fa fa-angle-right',
                    aria: 'true'
                },
                {
                    id: 2,
                    title: 'Services',
                    classicon: '',
                    aria: ''
                }
            ]
        }
    }
    render() {
        return (
            <div className="bg-body3">
                <div className="boxed">
                    <Loader />
                    <TopBar />
                    {
                        this.state.headers.map(data => (
                            <Header data={data} key={data.id}/>
                        ))
                    }

                    <div className="page-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-title-heading">
                                        <h1 className="h1-title">Services</h1>
                                    </div>
                                    <ul className="breadcrumbs">
                                        {
                                            this.state.breadcrumbs.map(data =>(
                                                <li key={data.id} ><Link to="#" title="">{data.title}<i className={data.classicon} aria-hidden={data.aria}></i></Link></li>
                                            ))
                                        }
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <ServicesBlock />                 */}
                    {/* <MainServices /> */}

                    <section className="flat-row flat-iconbox bg-theme">
                        <div className="container">
                            {/* <!-- /.row --> */}
                            <ServicesBox1 />

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="height80"></div>
                                </div>
                            </div>
                            <ServicesBox2 />
                        </div>
                    </section>
                    
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Services;