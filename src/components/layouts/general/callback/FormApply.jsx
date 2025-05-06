import React, { Component } from 'react';

class FormApply extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            numberregexp : /^[0-9\b]+$/
        }
    }

    onHandleTelephoneChange = e => {
        let mobile = e.target.value;
        console.log(mobile +" >>> "+this.state.numberregexp.test(mobile))
        if (mobile !== '' && this.state.numberregexp.test(mobile) && mobile.length < 15) {
            this.setState({ [e.target.name]: mobile })
        }
    };

    render() {
        return (
            <div className="flat-callback-form">
                <form id="contactform" method="post" action="/connect/contact-process2.php" noValidate="novalidate" >
                    <div className="flat-field">
                        <div className="field-one-half">
                            <label>How can we help? *</label>
                            <select name="discuss">
                            <option defaultValue="Website Development">Web App Development</option>
                            <option defaultValue="Mobile App">Mobile App Development</option>
                            <option defaultValue="Digital Marketing">Digital Marketing Services</option>
                            <option defaultValue="Graphics Designing">Graphics Related Query</option>
                            </select>
                        </div>
                        {/* <!-- /.field-one-half --> */}
                        <div className="field-one-half field-email">
                            <input type="text" id="email" defaultValue="" maxLength="240" name="email" placeholder="You Email" required="required" />
                        </div>
                        {/* <!-- /.field-one-half --> */}
                        <div className="clearfix"></div>
                    </div>
                    <div className="flat-field">
                        <div className="field-one-half field-phone">
                            {/* <input type="text" id="phone" defaultValue="" name="phone" placeholder="You phone number" required="required" /> */}
                            <input type="text"
                                value={this.state.mobile}
                                onChange={this.onHandleTelephoneChange}
                                name="mobile" id="mobile"  placeholder="You phone number" required="required" />

                        </div>
                        <div className="field-one-half field-submit">
                            <button type="submit" name="submit" className="button-submit-field">Get A Call</button>
                        </div>
                    </div>
                    {/* <!-- /.flat-field --> */}
                </form>
                {/* <!-- /.form --> */}
            </div>
            /* <!-- /.callback-form --> */
        );
    }
}

export default FormApply;