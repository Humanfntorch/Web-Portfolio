import { NavLink} from "react-router-dom";
import React from "react";

// Routes to other pages, home being base index.
const links = [
    { path: "/", text: "Home" },
    { path: "about", text: "About" },
    { path: "contactMe", text: "Contact Me" },
    { path: "projects", text: "Projects" },
];

const TopNavbar = () =>
{   
    return (
        <>
            <nav className="top-navbar">
                <ul>
                    {links.map((link) => {
                        return (
                            <React.Fragment key={link.text}>
                             <li>
                                <NavLink to={link.path}>{link.text} </NavLink>
                            </li>
                            </React.Fragment>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default TopNavbar;