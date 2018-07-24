import React from 'react';
import Slider from '@material-ui/lab/Slider';
import Typography from '@material-ui/core/Typography';

const SimpleSlider = (props) => {
    const { setSliderValue, value } = props;

    return (
      <div>
        <Typography variant='headline' style={{ color: '#2A5CAD' }} >${value}</Typography>
          <Slider 
            style={{ margin: 'auto' }} 
            value={value} 
            max={500000} 
            min={5000} 
            step={5000} 
            onChange={setSliderValue}
          />
      </div>
    );
  }

  export default SimpleSlider;