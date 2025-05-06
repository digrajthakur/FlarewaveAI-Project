import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TabPortfolio from './TabPortfolio';

class PortfolioLoad extends Component {
	constructor(props) {
        super(props);
        this.state = {
			//OOPS
			itemcontent: [
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
					title: 'Ecommerce Mobile App',
					category: 'Services /',
					subcategory: 'Ecommerce',
				},
				{
					id: '8',
					srcimg: 'images/portfolio/shopping-app03_sm.png',
					classitem: 'item ecommerce platform flarewaveAI',
					title: 'Ecommerce Mobile App',
					category: 'Apps /',
					subcategory: 'Ecommerce',
				},
				{
					id: '9',
					srcimg: 'images/portfolio/phonebook-app04_sm.png',
					classitem: 'item utility_apps flarewaveAI',
					title: 'PhoneBook Mobile App',
					category: 'Apps /',
					subcategory: 'Utility',
				},
				{
					id: '10',
					srcimg: 'images/portfolio/financeapp-app02_sm.png',
					classitem: 'item finance flarewaveAI',
					title: 'Finance',
					category: 'Apps /',
					subcategory: 'Finance',
				},
				{
					id: '11',
					srcimg: 'images/portfolio/web-forge-06_sm.png',
					classitem: 'item ecommerce flarewaveAI',
					title: 'Forge Online Shopping',
					category: 'Services /',
					subcategory: 'Ecommerce',
				},
				{
					id: '12',
					srcimg: 'images/portfolio/weather-app06_sm.png',
					classitem: 'item utility_apps flarewaveAI',
					title: 'Weather Watch',
					category: 'Apps /',
					subcategory: 'Utility',
				},

				{
					id: '13',
					srcimg: 'images/portfolio/chat-app07_sm.png',
					classitem: 'item social flarewaveAI',
					title: 'Chatting App',
					category: 'Apps /',
					subcategory: 'Social',
				},
				{
					id: '14',
					srcimg: 'images/portfolio/restaurant-booking-app08_sm.png',
					classitem: 'item services flarewaveAI',
					title: 'Resto Book App',
					category: 'Apps /',
					subcategory: 'Services',
				},
				{
					id: '15',
					srcimg: 'images/portfolio/hotel-booking-app09_sm.png',
					classitem: 'item services flarewaveAI',
					title: 'Hotel Booking App',
					category: 'Apps /',
					subcategory: 'Services',
				},
				{
					id: '16',
					srcimg: 'images/portfolio/web-ecom-07_sm.png',
					classitem: 'item ecommerce flarewaveAI',
					title: 'Ecommerce Shopping',
					category: 'Services /',
					subcategory: 'Ecommerce',
				},
				
				{
					id: '17',
					srcimg: 'images/portfolio/web-ecom-08_sm.png',
					classitem: 'item food flarewaveAI',
					title: 'Foodie',
					category: 'WebApp /',
					subcategory: 'Foodie',
				},
				{
					id: '18',
					srcimg: 'images/portfolio/invoice-app10_sm.png',
					classitem: 'item utility_apps flarewaveAI',
					title: 'Invoicing App',
					category: 'Apps /',
					subcategory: 'Utility',
				},
				{
					id: '19',
					srcimg: 'images/portfolio/movie-book-app11_sm.png',
					classitem: 'item services flarewaveAI',
					title: 'Movie Booking App',
					category: 'Apps /',
					subcategory: 'Service',
				},
				{
					id: '20',
					srcimg: 'images/portfolio/doctor-booking-app12_sm.png',
					classitem: 'item services flarewaveAI',
					title: 'Doctor Booking App',
					category: 'Apps /',
					subcategory: 'Service',
				},
				{
					id: '21',
					srcimg: 'images/portfolio/foodie-delivery_app13_sm.png',
					classitem: 'item food flarewaveAI',
					title: 'Foodie App',
					category: 'Apps /',
					subcategory: 'Food Delivery',
				},
				{
					id: '22',
					srcimg: 'images/portfolio/banner-food-01_sm.png',
					classitem: 'item graphics flarewaveAI',
					title: 'Food Ads Banner',
					category: 'Graphics /',
					subcategory: 'Banner',
				},
				{
					id: '23',
					srcimg: 'images/portfolio/banner-roller-02.png',
					classitem: 'item graphics flarewaveAI',
					title: 'Business Roller Banner',
					category: 'Graphics /',
					subcategory: 'Banner',
				},
				{
					id: '24',
					srcimg: 'images/portfolio/banner-roller-03.png',
					classitem: 'item graphics flarewaveAI',
					title: 'Business Roller Banner',
					category: 'Graphics /',
					subcategory: 'Banner',
				},
				{
					id: '25',
					srcimg: 'images/portfolio/banner-fb-ad-04.png',
					classitem: 'item graphics flarewaveAI',
					title: 'Business Roller Banner',
					category: 'Graphics /',
					subcategory: 'Banner',
				},
				{
					id: '26',
					srcimg: 'images/portfolio/menu-food_01.png',
					classitem: 'item graphics flarewaveAI',
					title: 'Food Menu',
					category: 'Graphics /',
					subcategory: 'Menu',
				},
				{
					id: '27',
					srcimg: 'images/portfolio/card-business-01.png',
					classitem: 'item graphics flarewaveAI',
					title: 'Business Card',
					category: 'Graphics /',
					subcategory: 'Identity',
				},
				{
					id: '27',
					srcimg: 'images/portfolio/card-business-02.png',
					classitem: 'item graphics flarewaveAI',
					title: 'Business Card',
					category: 'Graphics /',
					subcategory: 'Identity',
				},
				{
					id: '27',
					srcimg: 'images/portfolio/card-business-03.png',
					classitem: 'item graphics flarewaveAI',
					title: 'Business Card',
					category: 'Graphics /',
					subcategory: 'Identity',
				},
				{
					id: '28',
					srcimg: 'images/portfolio/mercari-india.jpg',
					classitem: 'item software engineering website',
					title: 'Mercari India',
					category: 'Services /',
					subcategory: 'Services',
				},
				// {
				// 	id: '29',
				// 	srcimg: 'images/portfolio/casaamber-1.jpg',
				// 	classitem: 'iten ecommerce website',
				// 	title: 'Casaamber',
				// 	category: 'Services /',
				// 	subcategory: 'Ecommerce',
				// },			
			]
        }
    }
    render() {
        return (
				/* <!-- Portfolio --> */
				<section className="flat-row pd-portfolio-s3" id="work">
					<TabPortfolio />
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="dividers portfolio"></div>
								<div className="flat-portfolio">             
									<div className="portfolio-wrap grid one-three clearfix">
										{
											this.state.itemcontent.map(data =>(
												<div key={data.id} className={data.classitem}>
													<div className="wrap-iconbox">
														<div className="featured-post">
															<img src={data.srcimg} alt="img" />
														</div>
														<div className="title-post">
															<Link to="#">{data.title}</Link>
														</div>
														<div className="category-post">
															<Link to="#" title="">{data.category} </Link>
															<Link to="#" title=""> {data.subcategory}</Link>
													</div>
												</div> 
											</div>
										/* <!-- portfolio-item --> */
											))
										}
									</div>
									{/* <!-- /.portfolio-wrap --> */}
								</div>
								{/* <!-- /.flat-portfolio --> */}
							</div>

						</div>
					</div>
				</section> 

				 
        );
    }
}

export default PortfolioLoad;