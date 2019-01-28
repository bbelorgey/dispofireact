import React from 'react';
import { Parallax } from 'react-parallax';

const EffetParallaxe = ({image}) => {

  return (
      <Parallax className="d-none d-md-block"
        blur={{ min: 0, max: 3 }}
        bgImage={image}
        bgImageAlt="background image"
        // zoom
        strength={300}
      >
        <div style={{ height: '100px' }} />
      </Parallax>
  )
}

export default EffetParallaxe;