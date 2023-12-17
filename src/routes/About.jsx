import React from "react";
import "styles/app.css";
import Header from 'components/Header';
import { ReactComponent as EducationIcon } from "assets/images/graduation-cap-svgrepo-com.svg";
import { ReactComponent as SkillIcon } from "assets/images/settings-gear-svgrepo-com.svg";
import { ReactComponent as InfoIcon } from "assets/images/info-svgrepo-com.svg";
import UU_Logo from "assets/images/UU_Logo.png";
import SLCC_Logo from "assets/images/SLCC_Logo.png";
import CPU_Logo from "assets/images/code-svgrepo-com.svg";
import Scales_Logo from "assets/images/balance-svgrepo-com.svg";
import Gear_Logo from "assets/images/settings2-gear-svgrepo-com.svg";
import My_Pic from "assets/images/homepagePic.jpg";



const About = () =>
{
    return (
        <React.Fragment>
            <Header pageTitle={"About"} />

            <div className="about">
                <div className="education">
                    <div className="education-header">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <EducationIcon style={{ width: "80px", height: "66px", marginRight: "20px" }} />
                            <h2 style={{ fontSize: "36px", textAlign: "center", margin: 0 }}>Education</h2>
                        </div>
                    </div>
                    <br />


                    {
                        /*
                            Education sections 
                    
                        */
                    }

                    <div className="masters">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={UU_Logo} alt="University Logo" style={{ width: "50px", height: "46px", marginRight: "20px", marginBottom: "10px" }} />
                            <div style={{ textAlign: "center", maxWidth: "500px" }}>
                                <h2 style={{ fontSize: "17px", margin: 0 }}>University &nbsp; of &nbsp; Utah</h2>
                                <h3 style={{ fontSize: "16px", margin: 0 }}>Master of Science &nbsp; - &nbsp; MS,  &nbsp; Computer Science</h3>
                                <h3 style={{ fontSize: "16px", margin: 0 }}>May 2023</h3>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>



                    <div className="bachelors">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={UU_Logo} alt="University Logo" style={{ width: "50px", height: "46px", marginRight: "30px", marginBottom: "10px" }} />
                            <div style={{ textAlign: "center", maxWidth: "500px" }}>
                                <h2 style={{ fontSize: "17px", margin: 0 }}>University &nbsp; of &nbsp; Utah 
                                </h2>
                                <h3 style={{ fontSize: "16px", margin: 0 }}>Bachelor of Science &nbsp; - &nbsp; BS, &nbsp; Physics &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  </h3>
                                <h3 style={{ fontSize: "16px", margin: 0 }}>Minor in Computer Science</h3>
                                <h3 style={{ fontSize: "16px", margin: 0 }}>2019 - 2021</h3>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>



                    <div className="associates">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={SLCC_Logo} alt="Community College Logo" style={{ width: "50px", height: "46px", marginRight: "30px", marginBottom: "10px" }} />
                            <div style={{ textAlign: "center", maxWidth: "500px" }}>
                                <h2 style={{ fontSize: "17px", margin: 0 }}>Salt &nbsp; Lake &nbsp; Community &nbsp; College</h2>
                                <h3 style={{ fontSize: "16px", margin: 0 }}>Associate of Science &nbsp; - &nbsp; AS, &nbsp; Physics &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</h3>
                                <h3 style={{ fontSize: "16px", margin: 0 }}>High Honors</h3>
                                <h3 style={{ fontSize: "16px", margin: 0 }}>2016 - 2018</h3>
                            </div>
                        </div>
                    </div>


                    {
                        /*
                            Skills sections 
                    
                        */
                    }

                </div>
                <div className="skills">
                    <div className="skills-header">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <SkillIcon style={{ width: "80px", height: "66px", marginRight: "20px" }} />
                            <h2 style={{ fontSize: "36px", textAlign: "center", margin: 0 }}>Skills</h2>
                        </div>
                    </div>
                    <br />

                    <div className="programming-skills">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img src={CPU_Logo} alt="Computer Programming Logo" style={{ width: "50px", height: "46px", marginRight: "39px", marginBottom: "10px" }} />
                            <div style={{ textAlign: "center", maxWidth: "500px" }}>

                                <h2 style={{ fontSize: "18px", margin: 0 }}>Programming &nbsp; Languages <br/> </h2>
                                <h3 style={{ fontSize: "16px", margin: 0 }}>Java, &nbsp; Python, &nbsp; C/C#, &nbsp; JavaScript, &nbsp; HTML/CSS </h3>
                                <h2 style={{ fontSize: "18px", margin: 0, paddingTop: "3px" }}>Frameworks <br/></h2>
                                <h3 style={{ fontSize: "16px", margin: 0 }}>React, &nbsp; .NET, &nbsp; JUnit, &nbsp; Kivy, &nbsp; Buildozer, &nbsp; TensorFlow </h3>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>



                    <div className="Relevant-skillset">
                        <div style={{ display: "flex", alignItems: "left", justifyContent: "center" }}>
                            <img src={Gear_Logo} alt="Relevant Skillset" style={{ width: "50px", height: "46px", marginRight: "30px", marginBottom: "10px", marginTop:"15px" }} />
                            <div style={{ textAlign: "center", maxWidth: "371px" }}>
                                <h2 style={{ fontSize: "18px",  margin: 0 }}>Relevant &nbsp; Skillset </h2>
                                <h3 style={{ fontSize: "16px",  margin: 0 }}>Object-Oriented Programming, Discrete Data Structures & Algorithms, Machine Learning, AI, Network Security, Mobile Devolopment &nbsp; </h3>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>


                    <div className="soft-skills">
                        <div style={{ display: "flex", alignItems: "left", justifyContent: "center" }}>
                            <img src={Scales_Logo} alt="Balanced Scaled Logo" style={{ width: "50px", height: "46px", marginRight: "30px", marginBottom: "10px", marginTop: "15px" }} />
                            <div style={{ textAlign: "center", maxWidth: "371px" }}>
                                <h2 style={{ fontSize: "18px",  margin: 0 }}>Soft &nbsp; Skills </h2>
                                <h3 style={{ fontSize: "16px",  margin: 0 }}>Team-Oriented, &nbsp; Problem-Solving, &nbsp; Communication, &nbsp; Design & Implementation, &nbsp; Enthusiastic</h3>
                            </div>
                        </div>
                    </div>

                </div>


                {
                    /*
                        Additional Info section 
                    */
                }


                <div className="about-me">
                    <div className="about-header">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <InfoIcon style={{ width: "80px", height: "66px", marginRight: "20px" }} />
                            <h2 style={{ fontSize: "36px", textAlign: "center", margin: 0 }}>More About Me</h2>
                        </div>
                    </div>

                    <div className="soft-skills">
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "left" }}>
                            <img src={My_Pic} alt="Me with my dog" style={{ width: "290px", height: "276px", marginRight: "20px", marginBottom: "70px" }} />
                            <div>
                                <h2 style={{ fontSize: "17px", textAlign: "center", marginBottom: "60px", marginTop: "20px" }}>
                                    Greetings! I'm Jacob Rogers, and I appreciate you taking the time to explore my website, where I aim to give you a glimpse into who I am and my passions.
                                    <br />
                                    <br />
                                    Residing in Salt Lake City, Utah, for over two decades, I completed both my bachelor's and master's degrees at the prestigious University of Utah. My academic journey unfolded in the realm of science, technology, engineering, and mathematics (STEM), fueling my pursuit of physics and computer science.
                                    <br />
                                    <br />
                                    Driven by a genuine love for tackling challenges, I thrive in the intricate processes of research, deconstruction, solution design, implementation, and the rigorous testing of those solutions. At the age of 16, I discovered that my affinity for problem-solving found its ideal ally in computer programming. With a steadfast belief that software engineering holds the key to a better world, I dedicated myself to studying computer science, delving into fundamentals like Object-Oriented programming, discrete data structures, algorithms, and advanced topics such as Data Mining, Machine Learning, AI, Network Security, Advanced Database Systems, and High Parallel Computing. You can find details of the various projects I've undertaken, both academically and personally, on the 'Projects' page of this site.
                                    <br />
                                    <br />
                                    Beyond the realms of STEM, I find joy in exploring the world, having ventured both across the United States and internationally. Notably, my travels led me to Morocco, where I met my incredible wife, and we're approaching our third anniversary. Most of my cherished moments revolve around spending time with her and our dog, Ada. Whether traversing different cultures, seeking thrills at amusement parks, indulging in diverse cuisines, or simply enjoying downtime with video games and movies at home, we relish each moment together.
                                    <br />
                                    <br />
                                    Thank you once again for visiting my website. I'd love to hear your thoughts or answer any questions you might have. Feel free to reach out to me at staringatnebulas@gmail.com or through the 'Contact Me' page. Cheers!
                                </h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}
export default About;
