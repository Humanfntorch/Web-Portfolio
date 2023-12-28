import "styles/app.css";
import Header from 'components/Header';
import React from "react";
import ML_IMG from "assets/images/ml.jpg";
import AI_IMG from "assets/images/Pac-Man-AI.gif";
import NS_IMG from "assets/images/NetworkSecurity.png";
import TANK_IMG from "assets/videos/Tank_Wars.mp4";
import TTT_IMG from "assets/videos/TicTacToe.mp4";
import SS_IMG from "assets/videos/SpamScanner.mp4";
import SPX_IMG from "assets/videos/Spreadsheet.mp4";
import CL_IMG from "assets/videos/Checklist.mp4";
import { Link } from 'react-router-dom'



const projs = [
    {
        title: "Machine Learning Library",
        sample: ML_IMG,
        language: "Python",
        description: "Python ML Archetypes Library: Crafted a comprehensive machine learning library from scratch, featuring archetypes like Decision Trees, Ensemble Learning (Ada Boost, Random Forests), Linear Regression, SVM, Perceptron, and Neural Networks. Rigorously tested on real-world datasets, achieving a minimum accuracy of 93% and maximum accuracy of 98%. Utilized Python and essential libraries (Pandas, NumPy, Matplotlib). Elevate your ML game with proven algorithms.",
        link: "https://github.com/Humanfntorch/MachineLearning.git",
        isVideo: false,
        clName: "machinelearning",
        index: 0,
    },
    {
        title: "Network Security Library",
        sample: NS_IMG,
        language: "Java",
        description: "Java Network Security Protocols: Developed a robust set of network security protocols from the ground up using Java and its Security API. Highlights include a Substitution-Permutation Network for encryption/decryption, a seamless Diffie-Hellman secret key exchange between TCP socket connections, Needham-Schroeder Mediated Authentication employing a trusted central server, and a meticulous recreation of the SSL3 protocol. Witness secure communication with successful handshakes, authentication, encryption, and seamless data transmission between connected sockets.",
        link: "https://github.com/Humanfntorch/Network-Security.git",
        isVideo: false,
        clName: "networksecurity",
        index: 1,
    },
    {
        title: "Checklist",
        sample: CL_IMG,
        language: "HTML, CSS, Javascript (React)",
        description: "Efficient Task Management Checklist: Streamline your task workflow with this user-friendly checklist program. The clean and simple interface, designed for optimal user interaction, ensures an efficient task management experience. Built using React, HTML, CSS, and JavaScript, the application features React webpage routing for an About page, login functionality (offering additional editing features), and a central checklist webpage. Hosted on Vercel, this checklist program provides a seamless and organized approach to task management.",
        link: "https://github.com/Humanfntorch/Checklist.git",
        isVideo: true,
        clName: "checklist",
        index: 2,
    },
    {
        title: "Tic Tac Toe",
        sample: TTT_IMG,
        language: "Java",
        description: "Java Tic Tac Toe: Experience the classic game with a twist! This recreation of Tic Tac Toe not only embraces core software practices such as Model-View-Controller (MVC) and Object-Oriented Programming but also enhances user interaction. Users can personalize their experience by editing player names and in-game icons while keeping track of win/loss scores and stalemates. This project serves as a delightful exploration of Java's extensive GUI features and a challenge to delve into detailed Java APIs, making it a fun and engaging side project.",
        link: "https://github.com/Humanfntorch/Tic-Tac-Toe.git",
        isVideo: true,
        clName: "tictactoe",
        index: 3,
    },
    {
        title: "AI - PacMan",
        sample: AI_IMG,
        language: "Python",
        description: "PacMan AI Algorithms Collection: Unleash the power of AI in PacMan adventures! This project features a diverse array of algorithms, transforming PacMan into an effective agent navigating through mazes of varying sizes and complexities. Witness PacMan's strategic prowess in dealing with adversaries, from evading ghost pursuits to devouring them after obtaining power pellets. The algorithms span multiple domains: 1. Searching: Breadth-First, Depth-First, Uniform Cost, A* search, and heuristic building. 2. MultiAgent Search: Reflex Agent, MiniMax, ExpectiMax, Alpha-Beta Pruning, and Evaluation Function building. 3. Reinforcement Learning: Value Iteration, Q-Learning, Approximate Q-Learning, Epsilon Greedy Action Learning, and Policy building. 4. Probabilistic Inference: Hidden Markov Model with Exact Inference, Approximate Inference, and Joint Particle Filter - encompassing Observation building and Time Elapse. Experience the thrill of consistently winning games as PacMan masters these cutting-edge AI techniques.",
        link: "https://gitfront.io/r/Humanfntorch/CQJnky8YDVBF/AI/",
        isVideo: false,
        clName: "aipacman",
        index: 4,
    },
    {
        title: "Tank Wars",
        sample: TANK_IMG,
        language: "C#",
        description: "C# Tank Battle Royale: Immerse yourself in an epic online tank battle royale, meticulously crafted with core software engineering principles. This game embodies Model-View-Controller separation, abstraction, encapsulation, Object-Oriented Programming, and boasts a robust Testing Suite for safe multithreading. Built on the .NET framework, it features event-driven communication between client and server, leveraging multithreaded feedback loops for a seamless experience. Highlights: 1. Clean and smooth GUI 2. Button remapping for personalized controls 3. Effective collision detection for firing, movement, and tank spawning 4. Hosting capabilities for 16 connected TCP sockets on the server 5. Dynamic game mode changes via XML files Challenge your friends in this dynamic battlefield, experiencing the thrill of strategic tank warfare. A fusion of fun and extensive programming prowess awaits in this exciting implementation.",
        link: "https://gitfront.io/r/Humanfntorch/UWtfU7eXdLWs/Tank-Wars/",
        isVideo: true,
        clName: "tankwars",
        index: 5,
    },
    {
        title: "SpamScanner",
        sample: SS_IMG,
        language: "Python",
        description: "Python Android App: Combatting Spam and Phishing with Intelligence. Introducing an innovative Android application designed to safeguard users from potential threats in SMS messages. This powerful tool employs a deep learning neural network, constructed using TensorFlow and trained on an extensive dataset of nearly 30,000 messages, achieving an outstanding classification accuracy of 98%. Key Features: 1. Utilizes core natural language processing techniques for message processing, including word stemming, lemmatization, and TfidfVectorizer for mapping words to numerical values and tensor creation. 2. Analyzes hyperlink and phone number inclusion for further labeling, enhancing the ability to flag potential fraudulent messages. 3. Seamlessly integrated machine learning model through the Kivy API and a user-friendly GUI interface. 4.  With user permission, the application runs persistently in the background, alerting users whenever a new message is flagged according to the trained model. Current Developments: 1. Reworking the application to implement a Naive-Bayes classifier for enhanced efficiency. 2. Updating the interface to empower users with more control over the model, enabling additional training on user requests. 3. Aiming to provide a more effective solution to combat the harmful impact of phishing attempts. Experience a new level of security and control over your messages with this cutting-edge Android app.",
        link: "https://github.com/Humanfntorch/SpamScanner-App.git",
        isVideo: true,
        clName: "spamscanner",
        index: 6,
    },
    {
        title: "Spreadsheet",
        sample: SPX_IMG,
        language: "C#",
        description: "C# Excel Replica: Experience the functionality of Microsoft Excel in this comprehensive imitation built using C# and the .NET framework. Leveraging core software engineering principles such as Model-View-Controller separation, abstraction, encapsulation, and Object-Oriented Programming, this application also boasts an extensive Testing Suite for robust performance. Key Features: 1. Complete imitation of Microsoft Excel with support for all common Excel operations. 2. Cell storage and manipulation, including the most common function operations (addition, subtraction, multiplication, and division) on all cells. 3. Multiple windows can operate concurrently, enhancing user flexibility. 4. Save functionality allows users to store spreadsheets through XML file writing for future retrieval. 5. Users can choose the location for saving files and open existing files for further editing operations. Experience the convenience and power of this Excel replica, offering seamless operations and a user-friendly interface for your spreadsheet needs.",
        link: "https://gitfront.io/r/Humanfntorch/de5MquQfYNYT/Spreadsheet/",
        isVideo: true,
        clName: "spreadsheet",
        index: 7,
    }
];

const Projects = () =>
{
    return (
        <React.Fragment>
            <Header pageTitle={"Projects"} />
            <div className="projects-container">
                    {projs.map((proj) => (
                        <React.Fragment key={proj.index} >
                            <div className="project">
                                
                                <div className="proj-title">
                                    <h2>{proj.title}</h2>
                                </div>

                                <div className="proj-sample">
                                    {proj.isVideo ?
                                        (
                                            <video className="proj-video" controls >
                                                <source src={proj.sample} type="video/mp4" />
                                            </video>
                                        ) :

                                        (
                                            <img
                                                src={proj.sample} 
                                                alt="Project representation"
                                                className="proj-image"
                                            />
                                        )
                                    }
                                </div>

                                <div className="proj-language">
                                    <h3 style={{fontSize:"22px"}}>Languages Used: <br /></h3> <h3 style={{fontSize:"18px"}}>{proj.language} </h3>
                                </div>

                                <div className="proj-description">
                                    <h3 style={{fontSize:"22px"}}>Project Description: </h3> <span style={{fontSize:"18px"}}>{proj.description} </span>
                                </div>

                                <div className="proj-link">
                                    <Link to={proj.link} target="_blank" rel="noopener noreferrer" className="gold-link">See Project Code</Link>
                                </div>

                                <br />
                            </div>

                        </React.Fragment>
                    ))}
            </div>
        </React.Fragment>

    );
}

export default Projects;