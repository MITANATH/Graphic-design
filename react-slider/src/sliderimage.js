import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Example = () => {
   
    return (
        <Slide
  autoplay={false}
  onChange={function noRefCheck(){}}
  onStartChange={function noRefCheck(){}}
>
  <div className="each-slide-effect">
    <div
      style={{
        backgroundImage: 'url(https://www.figma.com/file/91QjP2Pho4bMA2JD6Z2fMN/image/ca298291cb4994eb0e053705c1cb852e54fb68fd?fuid=1317529350728843859)'
      }}
    >
      <span>
        
      </span>
    </div>
  </div>
  <div className="each-slide-effect">
    <div
      style={{
        backgroundImage: 'url(https://www.licious.in/blog/wp-content/uploads/2023/02/shutterstock_2205168763-600x406.jpg)'
      }}
    >
      <span>
        
      </span>
    </div>
  </div>
  <div className="each-slide-effect">
    <div
      style={{
        backgroundImage: 'url(https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/chicken-65-restaurant-style-500x375.jpg)'
      }}
    >
      <span>
        
      </span>
    </div>
  </div>
</Slide>
    );
};

export default Example;