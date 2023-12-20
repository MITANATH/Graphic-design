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
        backgroundImage: 'url(https://3.bp.blogspot.com/-qB_lTb5MyNE/WEjMy4L78jI/AAAAAAAADM0/7xKv9wGKAJsXR7UCdsOnEVZwv14X68FvgCLcB/w1200-h630-p-k-no-nu/i-love-luchi.1024x1024.jpg)'
      }}
    >
      <span>
        Slide 1
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
        Slide 2
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
        Slide 3
      </span>
    </div>
  </div>
</Slide>
    );
};

export default Example;