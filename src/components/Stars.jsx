import { useCallback } from "react";
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

const Stars = () =>
{
    const particlesInit = useCallback(async engine =>
    {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container =>
    {
        await console.log(container);
    }, []);

    const options = {
        background: {
            color: "transparent",
        },
        fpsLimit: 60,
        particles: {
            
            color: {
                value: ["#FFFFFF", "#87CEEB", "#FFFF99"],
            },

           
            links: {
                enable: false,
                opacity: 0.0,
                distance: 100,
            },
            move: {
                enable: true,
                speed: 0.1,
                
                /*
                outModes: {
                    default: "bounce",
                },
                */
                
    
                gravity: {
                    enable: false,
                    acceleration: 0.1,
                },
                trail: {
                    enable: false,
                    delay: 0,
                    pauseOnStop: false,
                    quantity: 1,
                    length: 100,
                    fillColor: "#000"
                   
                },
            },

            /*
            rotate: {
                random: true, // Enable random rotation
                speed: 3, // Adjust the rotation speed
                direction: "random", // You can use "random" for random directions
                animation: {
                    enable: true,
                    speed: 5, // Adjust the rotation animation speed
                },
            },
            */

            attract: {
                enable: true,
                rotateX: 3,
                rotateY: 6,
            },
            
            collisions: {
                enable: false,
                mode: "bounce",
            },
            number: {
                value: 80, // Number of particles
            },
            opacity: {
                value: 1,
            },
            
            shape: {
                type: 'star',
            },
                
            size: {
                value: 1.6,
              },
        },

        /*
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse', // Activate repulse interaction on hover
                },
            },
            modes: {
                repulse: {
                    distance: 30, // Adjust the distance of the repulsion effect
                    duration: 0.4, // Adjust the duration of the repulsion effect
                },
            },
        },
        */
        detectRetina: true,
    };


    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
    );
};

export default Stars;
