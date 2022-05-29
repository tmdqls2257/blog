import React from 'react';
import { useSpring, animated } from 'react-spring';

const LoopTrue = () => {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
    delay: 1000,
  });
  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: '#46e891',
        borderRadius: 16,
        ...styles,
      }}
    />
  );
};

export default LoopTrue;
