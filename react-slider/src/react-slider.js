import React, { useState } from 'react';
import Slider from 'react-slider';

const MySlider = () => {
    const [value, setValue] = useState(50);
  
    const handleChange = (newValue) => {
      setValue(newValue);
    };
  
    return (
      <div style={{ width: '60%', margin: '20px auto',background:"yellow" }}>
        <h2>Slider Value: {value}</h2>
        <Slider
          value={value}
          onChange={handleChange}
          min={30}
          max={100}
          step={1}
          orientation="horizontal"
        />
      </div>
    );
  };
  export default MySlider