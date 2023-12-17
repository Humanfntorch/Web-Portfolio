import { NavLink} from "react-router-dom";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { AiTwotoneHome } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi2";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdWork } from "react-icons/md";


// Routes to other pages, home being base index.
const links = [
    { path: "/", text: <span style={{ display: "flex", alignItems: "center" }}><AiTwotoneHome style={{ width: "20px", height: "26px", marginRight: "10px" }} /> Home</span>, key: 0 },
    { path: "projects", text: <span style={{ display: "flex", alignItems: "center" }}> <MdWork style={{ width: "20px", height: "26px", marginRight: "10px" }}/> Projects</span>, key: 3 },
    { path: "about", text: <span style={{ display: "flex", alignItems: "center" }}> <HiInformationCircle style={{ width: "20px", height: "26px", marginRight: "10px" }} /> About</span>, key: 1 },
    { path: "contactMe", text: <span style={{ display: "flex", alignItems: "center" }}> <BiSolidMessageDetail style={{ width: "20px", height: "26px", marginRight: "10px" }}/> Contact Me </span>, key: 2 },
];

const Navbar = () =>
{   
    // State to handle navbar
    const [navbarOpen, setNavbarOpen] = useState(false);

    // Instantiate ref to detect outside clicks
    const ref = useRef();
    // Detects outside clicks to close navbar
    useEffect(() =>
    {
        const handler = (e) =>
        {
            if (navbarOpen && ref.current && !ref.current.contains(e.target))
            {
                setNavbarOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () =>
        {
            document.removeEventListener("mousedown", handler);
        }
    }, [navbarOpen])

    return (
        <>
            <nav ref={ref} className="navbar">
                <button className="toggle"
                    onClick={() => setNavbarOpen((prev) => !prev)}>
                    {navbarOpen ? (<GrFormClose style={{ width: "30px", height: "35px", color: "black",  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.7)", backgroundImage: "linear-gradient(to right, #b39700, #806c00)" }} />) : (<BiMenuAltRight style={{width: "30px", height:"35px", color: "black",  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.7)", backgroundImage: "linear-gradient(to right, #b39700, #806c00)"}} />)}
                 </button>
                <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
                    {links.map((link) => {
                        return (
                            <React.Fragment key={link.key}>
                             <li>
                                <NavLink to={link.path} onClick={() => setNavbarOpen(false)}>{link.text} </NavLink>
                            </li>
                            </React.Fragment>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;