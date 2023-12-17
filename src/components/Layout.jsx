import Navbar from "components/Navbar";
import Header from "components/Header";
import Footer from "components/Footer";
// Outlet renders child route's elements in the parent route (this one)
import { Outlet } from "react-router-dom";

const Layout = () =>
{
    return (
        <div className="wrapper">
            <div className="layout-container">
                <Header/>
                <Navbar />
                <Outlet />
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
}

export default Layout;