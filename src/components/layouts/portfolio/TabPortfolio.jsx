import React, { Component } from 'react';
import { Link } from "react-router-dom";

class TabPortfolio extends Component {
	constructor(props) {
        super(props);
        this.state = {
            tabportfolio: [
                {
					id: 1,
					classname: 'active',
					datafilter: '*',
					title: 'All',
				},
				{
					id: 2,
					classname: '',
					datafilter: '.ecommerce',
					title: 'Ecommerce',
				},
				{
					id: 4,
					classname: '',
					datafilter: '.food',
					title: 'Fooducts',
				},
				{
					id: 5,
					classname: '',
					datafilter: '.social',
					title: 'Social Connect',
				},
				{
					id: 6,
					classname: '',
					datafilter: '.services',
					title: 'Services',
				},
				// {
				// 	id: 6,
				// 	classname: '',
				// 	datafilter: '.fitness',
				// 	title: 'Fitness',
				// },
				{
					id: 3,
					classname: '',
					datafilter: '.utility_apps',
					title: 'Utility',
				},
				{
					id: 3,
					classname: '',
					datafilter: '.graphics',
					title: 'Graphics Art',
				},

				
			],
        }
    }
    render() {
        return (
				/* <!--Tab Portfolio --> */
					<div className="bg-portfolio-filter">  
						<div className="container">
							<div className="row">
								<div className="col-md-12">                           
									<ul className="portfolio-filter">
										{
											this.state.tabportfolio.map(data =>(
												<li key={data.id} className={data.classname}><Link data-filter={data.datafilter} to="#">{data.title}</Link></li>
											))
										}
									</ul>
									{/* <!-- /.project-filter --> */}
								</div>
							</div>
						</div>
					</div>
        );
    }
}

export default TabPortfolio;