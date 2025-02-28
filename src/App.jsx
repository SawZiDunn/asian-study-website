import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Topic from "./components/Topic";
import Navbar from "./components/Navbar";
import topics from "./data/topics";

const App = () => (
    <Router>
        <div className="pt-16">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home topics={topics} />} />
                <Route path="/topic/:id" element={<Topic topics={topics} />} />
            </Routes>
        </div>
    </Router>
);

export default App;
