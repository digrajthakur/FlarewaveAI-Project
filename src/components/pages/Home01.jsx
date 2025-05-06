import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import { Footer,Header,Slider,  Loader,CarouselClient,  TopBar } from '../layouts/general';
import { Featured } from '../layouts/general/featured';
import { Project } from '../layouts/general/projects';
import { Callback } from '../layouts/general/callback';
import { ServicesBlock } from '../layouts/general/services';
import { Testimonials } from '../layouts/home06'
import { Counter } from '../layouts/home05';

class Home01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
           headers: [
               {
                   id: 1,
                   names: 'Home'
               }
           ],
           
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
                    <Slider />

                    <CarouselClient />
                    
                    
    
                    <ServicesBlock />                
    
                    <Project />
                    
                    <Callback />

                    <Featured />
                    
                    <Counter />

                    <Testimonials />
    
                    <Footer />
                </div>
            </div>
        );
    }
}

export default withRouter(Home01);