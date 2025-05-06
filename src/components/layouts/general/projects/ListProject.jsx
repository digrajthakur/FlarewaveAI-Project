import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class ListProject extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataProject: [
				{
					id: '1',
					srcimg: 'images/portfolio/food-app05_sm.png',
					classitem: 'item food flarewaveAI',
					title: 'Foodie App',
					category: 'Apps /',
					subcategory: 'Food Delivery',
				},
				{
					id: '2',
					srcimg: 'images/portfolio/web-fitness-03_sm.png',
					classitem: 'item services platform flarewaveAI',
					title: 'Fitness Pro',
					category: 'Services /',
					subcategory: 'Fitness',
				},

				{
					id: '3',
					srcimg: 'images/portfolio/web-ecom-04_sm.png',
					classitem: 'item ecommerce platform flarewaveAI',
					title: 'Picbas Shopping',
					category: 'Services /',
					subcategory: 'Ecommerce',
				},

				{
					id: '4',
					srcimg: 'images/portfolio/web-law-05_sm.png',
					classitem: 'item services platform flarewaveAI',
					title: 'Law Firm',
					category: 'WebApp /',
					subcategory: 'Services',
				},
				{
					id: '5',
					srcimg: 'images/portfolio/web-ecom-02.png',
					classitem: 'item ecommerce platform flarewaveAI',
					title: 'Jewellery Shopping',
					category: 'Services /',
					subcategory: 'Ecommerce',
				},
				{
					id: '6',
					srcimg: 'images/portfolio/web-ecom-01.png',
					classitem: 'item ecommerce platform flarewaveAI',
					title: 'Online Shopping',
					category: 'Services /',
					subcategory: 'Ecommerce',
				},
				{
					id: '7',
					srcimg: 'images/portfolio/shopping-app02_sm.png',
					classitem: 'item ecommerce platform flarewaveAI',
					title: 'Ecommerce Mobile',
					category: 'Services /',
					subcategory: 'Ecommerce',
				},
				{
					id: '8',
					srcimg: 'images/portfolio/mercari-india.jpg',
					classitem: 'item software engineering website',
					title: 'Mercari India',
					category: 'Services /',
					subcategory: 'Services',
				},
				{
					id: '9',
					srcimg: 'images/portfolio/casaamber-1.jpg',
					classitem: 'iten ecommerce website',
					title: 'Casaamber',
					category: 'Services /',
					subcategory: 'Ecommerce',
				},
			]
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<div className="iconbox-slider">
						<ul className="slides" data-item="3" data-nav="false" data-dots="false" data-auto="true">
							{
								this.state.dataProject.map(data => (
									<li className="item" key={data.id}>
										<div className="featured-post">
											<img src={data.srcimg} alt="" />
											{/* <Link to={data.srcimg}><i className="fa fa-arrows-alt"></i></Link> */}
										</div>
										<div className="title-post">
											<Link to="/portfolio" onClick={() => { window.location.href = "/portfolio" }}>{data.title}</Link>
										</div>
										<div className="category-post">
											<Link to="/portfolio" onClick={() => { window.location.href = "/portfolio" }}>{data.category}</Link>
											<Link to="/portfolio" onClick={() => { window.location.href = "/portfolio" }}>{data.subcategory}</Link>
										</div>
									</li>
								))
							}
						</ul>
						{/* <!-- /.slides --> */}
					</div>
					<div className="clearfix">

					</div>
				</div>
			</div>
		);
	}
}

export default ListProject;