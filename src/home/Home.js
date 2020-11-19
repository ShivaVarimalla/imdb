import React from 'react'
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import Home1 from './Home1'

import {connect} from 'react-redux'
import Slider from "react-slick";

class Home extends React.Component{
   renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div>
        <div className="slide" ><img src="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753" /></div>
      </div>
    ));
    
    render(){
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
     
    return(
        <div >
          
          <h1>Home</h1>
            <div>
              <div className="container">
                <div className="row margin">
                  <div className="col-sm-8">
                  <Slider {...settings}>{this.renderSlides()}</Slider>
                  </div>
                  <div className="col-sm-4">
                    <div className="top">
                    <img className="vertical" src="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753"/>
                    <img className="vertical" src="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753"/>
                    <img className="vertical" src="https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753"/>
                  </div>
                  </div>
                </div>
                <Home1/>
               
              </div>
            </div>
        </div>
    )
}
}
function mapStateToProps(state) {
  return {
    username: state.user
  };
}

export default connect(mapStateToProps)(Home);


