import React, { Component } from 'react';
import { Footer,Header,  Loader,  TopBar } from '../layouts/general';
import { Callback } from '../layouts/general/callback';
import { ProductFeatures } from '../layouts/portfolio';
import productInfo from '../layouts/productInfo';


class ProductLanding extends Component {
    constructor(props) {
        //productName
        super(props);

        this.state = {
           headers: [
               {
                   id: 1,
                   names: 'Home'
               }
           ],
           productName: this.props.match.params.productName,
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
                   
                    {/* <ProductBanner
                        title1 = { productInfo[this.state.productName].banner.title1 }
                        title2 = { productInfo[this.state.productName].banner.title1 }
                        bannerImage = { productInfo[this.state.productName].banner.image }
                    /> */}

                    {/* Product Technology Start Here */}
                    <section className="flat-row">
                        <div className="container-fluid center">
                            <div className="row">
                            {
                                <img src={ productInfo[this.state.productName].banner.image } alt=''/>
                            }
                            </div> 
                        </div>
                    </section>
                    {/* Product Technology End Here */}

                    <div className="dividers dividers-bc-v2  bg-theme"></div>
                    {/* Product Description Start Here */}
                    <div className="page-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-title-heading">
                                        <h1 className="h1-title">About App</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <section className="flat-row bg-theme" style={{paddingBottom: 20}}>
                        <div className="container">
                        <p>{ productInfo[this.state.productName].description }</p>
                            <div className="dividers dividers-bc-v3"></div>
                        </div>
                    </section>
                    {/* Product Description End Here */}

                    {/* Product Screenshots Start Here */}
                    <section className="flat-row pd-imagebox">
                        <div className="container center">
                            {
                                productInfo[this.state.productName].featuredProduct.map((element, index) => {
                                    return (index%2 == 0) ? 
                                        <div className="row">
                                            <div className="col-md-6" style={{marginTop:200}}>
                                            <div class="flat-testimonials-title center"><h2>{ element.title }</h2></div>
                                                <p>
                                                { element.description }
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <img src={ element.image } alt="flarewaveAI"/>
                                            </div>
                                        </div> 
                                    :
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src={ element.image } alt="flarewaveAI"/>
                                            </div>
                                            <div className="col-md-6" style={{marginTop:200}}>
                                            <div class="flat-testimonials-title center"><h2>{ element.title }</h2></div>
                                                <p>
                                                { element.description }
                                                </p>
                                            </div>
                                        </div> 
                                })
                            }
                        </div>
                    </section>
                    {/* Product Screenshots End Here */}
                    

                    {/* Feature listing of product Start */}
                    <div className="page-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-title-heading">
                                        <h1 className="h1-title">Features</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="flat-row bg-theme" style={{ paddingBottom: 20 }}>
                        <div className="container">
                            <ProductFeatures
                            
                                data = { productInfo[this.state.productName].features }
                            />
                        </div>
                    </section>
                    {/* Feature listing of product End */}

                    {/* Product Technology Start Here */}
                    <section className="flat-row pd-imagebox">
                        <div className="container center">
                            <div className="row">
                            <div class="flat-testimonials-title center"><h2>Technology</h2></div>
                                <div className="col-md-12">
                                    {
                                        productInfo[this.state.productName].technology.map(element =>(
                                            <span class="btn outline">{ element.name }</span>
                                        ))
                                    }
                                </div>
                            </div> 
                        </div>
                    </section>
                    {/* Product Technology End Here */}

                    {/* Product Technology Start Here */}
                    {/* <section className="flat-row pd-imagebox">
                        <div className="container-fluid center">
                            <div className="row">
                            <div class="flat-testimonials-title center"><h2>Final Product</h2></div>
                                    {
                                        productInfo[this.state.productName].screenshotBanner.map(element =>(
                                            <img src={ element.name }/>
                                        ))
                                    }
                            </div> 
                        </div>
                    </section> */}
                    {/* Product Technology End Here */}
                    
                    {/* Product Technology Start Here */}
                    <section className="flat-row" style={{ marginBottom: 20 }}>
                        <div className="container-fluid center">
                            <div className="row">
                            <div class="flat-testimonials-title center"><h2>Final Product</h2></div>
                            {
                                productInfo[this.state.productName].screenshotBanner.map(element =>(
                                    <img src={ element.name }/>
                                ))
                                // <img src={ productInfo[this.state.productName].banner.image }/>
                            }
                            </div> 
                        </div>
                    </section>
                    {/* Product Technology End Here */}
                    
                    <Callback />

                    <Footer />
                </div>
            </div>
        );
    }
}

export default ProductLanding;

