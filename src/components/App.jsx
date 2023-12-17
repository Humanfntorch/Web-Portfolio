import { Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import About from "routes/About";
import Projects from "routes/Projects";
import ContactMe from "routes/ContactMe";
import NotMatch from "routes/NotMatch";
import Layout from "components/Layout";

const App = () =>
{
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element = {<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contactMe" element={<ContactMe />} />
                <Route path="projects" element={<Projects />} />
                <Route path="*" element={<NotMatch />} />
            </Route>
        </Routes>
    );
}
export default App;