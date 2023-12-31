import React, { useState, useEffect } from 'react';
import "styles/app.css";
import Stars from "components/Stars";
import AnimateText from "components/AnimateText";
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import "components/Header";
import Header from 'components/Header';

const Home = () =>
{
  const [isFirstHeaderFinished, setIsFirstHeaderFinished] = useState(false);

  const firstHeaderText = "Hi, I'm Jake!";
  const secondHeaderTexts = [
    "I'm a Software Developer",
    "I'm a Problem Solver",
    "I'm a Software Designer",
  ];

  const delay = 50; // Adjust the delay as needed

  useEffect(() =>
  {
    const asyncTextAnimation = async () =>
    {
      await animateFirstHeader();

      // Add a delay of 1000 milliseconds before rendering the second header
      setTimeout(() =>
      {
        // setIsFirstHeaderFinished(false); // Reset to allow second header to animate
        setIsFirstHeaderFinished(true);

      }, 220);
    };

    asyncTextAnimation();
  }, []);

  const animateFirstHeader = async () =>
  {
    for (let i = 0; i < firstHeaderText.length; i++)
    {
      await new Promise((resolve) =>
      {
        setTimeout(() =>
        {
          resolve();
        }, delay);
      });
    }
  };

  /* Navigate to about page when button is clicked */
  let navigate = useNavigate();
  const routeChange = (e) =>
  { 
      e.preventDefault();
      let path = "about";
      navigate(path);
  }

  return (
    <React.Fragment>
      <div className='homepage-wrapper'>
        <Header pageTitle={"Home"} />
        <Stars />
        <div className="homepage">
          <h1 className='homepage-header-one'>
            <AnimateText text={firstHeaderText} delay={delay} />
          </h1>
          {isFirstHeaderFinished && (
            <React.Fragment>
              <div className='homepage-text'>
                <h2 className="homepage-header-two">
                  <TypeAnimation
                    sequence={secondHeaderTexts.map((text, index) => [
                      text,
                      1000
                    ]).flat()}
                    speed={50}
                    repeat={Infinity}
                  />
                </h2>
              </div>
              <button className="home-to-about" onClick={routeChange}>Learn More</button>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
