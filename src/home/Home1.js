import React from 'react'
import Slider from 'react-slick'

class Home1 extends React.Component{
    renderSlides1 = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div>
        <h2 className="center">Iron Man 3</h2>
        <div><img className="slide1" src="https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"/>
       </div>
      
      </div>
    ));
    render(){
        const settings1 = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
          };
        return(
            <div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 " style={{backgroundColor: "gray"}}>  
                     <Slider {...settings1}>{this.renderSlides1()}</Slider>
                     </div>
                   </div>
                </div>
            </div>
        )
    }
}
export default Home1;