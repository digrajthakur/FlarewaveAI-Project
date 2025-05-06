import React, { Component } from 'react';
class Counter extends Component {
	constructor(props) {
        super(props);
        this.state = {
            datacounter: [
                {
                    id: 1,
					number: '100+',
					namecounter: 'Successfully Project Done'
					
				},
				{
                    id: 2,
					number: '10+',
					namecounter: 'Years of Experience'
					
				},
				{
                    id: 3,
					number: '98%',
					namecounter: 'Client Satisfaction Across Global IT Solutions'
					
				},
				{
                    id: 4,
					number: '07',
					namecounter: 'Work With Country'
                },
            ]
        }
    }
    render() {
        return (
            <section className="flat-row parallax parallax2 overlay-s1 flat-counter">
                        <div className="overlay-parallax"></div>
                        <div className="container">
                            <div className="row">
								{
									this.state.datacounter.map(data => (
										<div className="col-md-3" key={data.id} >
											<div className="counter">
												<div className="counter-content">
													<div className="counter-number">
														<p className="numb-count" data-from="0" data-to={data.number} data-speed="1000" data-waypoint-active="yes">{data.number}</p>
													</div>
												</div>
												<p className="name">{data.namecounter}</p>
											</div>
                                		</div>
									))
								}
                                

                            </div>
                        </div>       
                    </section>

     
           
        );
    }
}

export default Counter;