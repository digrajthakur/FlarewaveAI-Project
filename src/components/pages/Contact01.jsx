import React, { Component } from 'react';
import { Header, TopBar , Footer,  Loader } from '../layouts/general';
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";


class Contact01 extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: '/',
                }
            ],
            titleheading: [
                {
                    id: '1',
                    title: 'Contact'
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
                    title: 'Contact',
                    classicon: '',
                    aria: ''
                }
            ],
            contactinfo: [
                {
                    id: '1',
                    title: 'Address',
                    info:'Plot no. 3 dr. Rajendra Prasad Colony Near Kamla Nehru Nagar, Ajmer Road Bypass, Jaipur'
                },
                {
                    id: '2',
                    title: 'Phone number',
                    info:'Call us: +91 - 97177 10928'
                },
                {
                    id: '3',
                    title: 'E-mail address',
                    info:'flarewaveai@gmail.com'
                }
            ],
            mobile: '',
            numberregexp : /^[0-9\b]+$/
        }
    };

    onHandleTelephoneChange = e => {
        let mobile = e.target.value;
        console.log(mobile +" >>> "+this.state.numberregexp.test(mobile))
        if (mobile !== '' && this.state.numberregexp.test(mobile) && mobile.length < 15) {
            this.setState({ [e.target.name]: mobile })
        }
    };

    render() {
        let userVerfied = function (response) {
            if(response)
                document.getElementById("submitBtn").disabled = false;
        };

        return (
            <div className="bg-body">
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
                                        {
                                            this.state.titleheading.map(data =>(
                                                <h1 key={data.id} className="h1-title">{data.title}</h1>
                                            ))
                                        }       
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


                    <section className="flat-row pd-contact-v1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="contact-info">
                                        {
                                            this.state.contactinfo.map(data =>(
                                                <div className="info info-address" key={data.id} >
                                                    <div className="title">{data.title}</div>
                                                    <p>{data.info}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div> 

                                <div className="col-md-8">
                                    <div className="flat-form-info">
                                        <form id="contactform"  method="post" action="/connect/contact-process.php" noValidate="novalidate" className="form-info">
                                            <div className="one-half v3">
                                                <p className="input-info"><input type="text" name="name" id="name"  placeholder="Name" required="required" /></p>
                                                <p className="input-info"><input type="email" name="email" id="email"  placeholder="Email" required="required" /></p>
                                                <p className="input-info">
                                                    <input type="text"
                                                        value={this.state.mobile}
                                                        onChange={this.onHandleTelephoneChange}
                                                        name="mobile" id="mobile"  placeholder="Mobile" required="required" /></p>
                                                <p className="input-info"><input type="text" name="subject" id="subject"  placeholder="Subject" required="required" /></p>
                                                <ReCAPTCHA
                                                    sitekey="6LeMGWYaAAAAAHpMRCkhPoFqT_SL2j9KyYAeGYAm"
                                                    onChange={ userVerfied }
                                                />
                                                
                                            </div>
                                            <div className="one-half v4">
                                                <p className="input-info"><textarea id="message-contact" name="message" placeholder="Message" required="required"></textarea></p>
                                                <p style={ { marginTop: 10 } } 
                                                className="input-info">
                                                    <button type="submit" className="submit" id="submitBtn"
                                                    >Send Message..</button>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div> 

                            </div>
                        </div>
			        </section>

	        {/* <section className="flat-row pdmap">
				<div className="flat-maps" data-address="Thành phố New York, Tiểu bang New York" data-height="454" data-images="images/map/map-1.png" data-name="Themesflat Map"></div>
	            <div className="gm-map">	            
	                <div className="map"></div>                        
	            </div>
	        </section> */}
                    <Footer />
                </div>
            </div>
        );
    }

    

}

export default Contact01;