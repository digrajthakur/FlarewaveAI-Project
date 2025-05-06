import React, { Component } from 'react';
class Testimonials extends Component {
	constructor(props) {
        super(props);
        this.state = {
			titleTes: [
				{
					id: 1,
					title: 'Testimonials'
				}
			],
            itemTes: [
                {
					id: 1,
					srcimg: './images/testimonials/img-01.png',
					content: 'They’re easy to contact and work with. Every step of the way, they kept in touch with me.”',
					author: 'Siobh Mcfeen',
					authorinfo: 'Founder & CEO, Digital Prayag'
				},
				{
					id: 2,
					srcimg: './images/testimonials/img-02.png',
					content: 'I liked their attention to the detail. Really appreciate their efforts to deliver everything on time.',
					author: 'Miley Cant',
					authorinfo: 'CTO, AATrade'
				},
				{
					id: 1,
					srcimg: './images/testimonials/img-01.png',
					content: 'They’re easy to contact and work with. Every step of the way, they kept in touch with me.”',
					author: 'Siobh Mcfeen',
					authorinfo: 'Founder & CEO, Digital Prayag'
				},
            ]
        }
    }
    render() {
        return (
			<section className="flat-row flat-testimonials">
				<div className="container">
					<div className="row">
						<div className="flat-testimonials-title center">
							{
								this.state.titleTes.map(data =>(
									<h2 key={data.id} >{data.title}</h2>
								))
							}
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 col-xs-12">
						<ul className="flat-testimonials-post" data-item="2" data-nav="false" data-dots="false" data-auto="true">
							{
								this.state.itemTes.map(data =>(
									<li className="item" key={data.id} >        					
										<article className="testimonials-post">
											<div className="featured-post">
												<img src={data.srcimg} alt="flarewaveAI" />
											</div>
											<div className="content-post">
												<div className="entry-post">
													{data.content}
												</div>
												<div className="testimonials-author">
													<div className="author-name">
														{data.author}
													</div>
													<div className="author-infomation">
														{data.authorinfo}
													</div>
												</div>
											</div>
										</article>     					
									</li>
								))
							}
							
						</ul>
						</div>
					</div>
				</div>
		    </section>
           
        );
    }
}

export default Testimonials;