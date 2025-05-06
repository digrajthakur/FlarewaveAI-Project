import React, { Component } from 'react';
class BoxView  extends Component {
	constructor(props) {
        super(props);
        this.state = {
            imgslide: [
                // {
                //     id: '1',
                //     srcimg: 'images/about/s01.jpg'
                // },
                // {
                //     id: '2',
                //     srcimg: 'images/about/s01.jpg'
                // }
            ],
            content: [
                {
                    id: '1',
                    title: 'Who We Are',
                    description: 'FlarewaveAI isn’t just a company — we are a collective of bold thinkers and doers, a team driven by innovation and unity. We are here to turn powerful ideas into digital reality. For us, success means building a culture where ideas grow, evolve, and create impact through cutting-edge tech. That the legacy our team strives to leave behind. Our vision? To stand out as one of India most trusted IT partners — delivering industry-specific, high-performance digital solutions that help businesses scale smart. We empower our clients by embracing future-ready tech and delivering with integrity, transparency, and excellence.',
                },
                {
                    id: '2',
                    title: 'What We Do',
                    description: 'We craft more than just code — we build intelligent, future-focused digital experiences. At FlarewaveAI, we specialize in web and mobile app development, powered by next-gen technologies like IoT, AI/ML, AR/VR, DevOps, Cloud, and Voice Assistants. Our passion for progress drives us to lead in both India and the USA, offering smart, scalable, and industry-tailored solutions. We are not just keeping up with innovation — we are creating it.',
                }
            ],
            blogtimeline: [
                // {
                //     id: '1',
                //     year: '2012',
                //     title: 'Start with a small service',
                //     description: 'This was the time when we started our company. We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing.',
                // },
                // {
                //     id: '2',
                //     year: '2013',
                //     title: 'Website Design, Seo Makerting Online',
                //     description: 'This was the time when we started our company. We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing.',
                // },
                // {
                //     id: '3',
                //     year: '2014',
                //     title: 'Developer WordPress Themeforest.net',
                //     description: 'This was the time when we started our company. We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing.',
                // }
            ]
            
        }
    }
    render() {
        return (
            <div>
                {/* <div className="flexslider s2">
                    <div className="flat-slides">                            
                        <ul className="slides">
                            {
                                this.state.imgslide.map(data =>(
                                    <li key={data.id}>   
                                        <img src={data.srcimg} alt="img" />
                                    </li>
                                ))
                            }
                            
                        </ul> 
                    </div>
                </div>  */}
                    {
                        this.state.content.map(data =>(
                            <div className="box-content" key={data.id} >
                                <div className="title">{data.title}</div>
                                <p>{data.description}</p>
                                <div className="dividers dividers-bc-v4"></div>
                            </div>
                            ))
                    }
                
                    {
                        this.state.blogtimeline.map(data =>(
                            <div className="flat-text-block-timeline" key={data.id} >
                                <div className="year">{data.year}</div>
                                <div className="flat-timeline-content">
                                <div className="box-content">
                                    <div className="title">{data.title}</div>
                                    <p>{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
								
        )
                                
    }
}

export default BoxView;