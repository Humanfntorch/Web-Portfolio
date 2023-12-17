import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

function AnimateText({text, delay}) {
  const animationProps = useSpring({
      from: { opacity: 0, transform: 'translateY(100px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
      /*
    to: async (next) => {
        await next({ opacity: 1, transform: 'translateY(0)' });
        await next({ color: 'gold' });
      }, */
  });
    
    const [index, setIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");

    useEffect(() =>
    {   
        if (index < text.length)
        { 

            const timeout = setTimeout(() =>
            {
                setCurrentText(prevText => prevText + text[index]);
                setIndex(prevIndex => prevIndex + 1);

            }, delay);

            return () => clearTimeout(timeout);

        }

    }, [index, delay, text]);
    

  return (
    <animated.div style={animationProps}>
      <span>{currentText}</span>
    </animated.div>
  );
}

export default AnimateText;