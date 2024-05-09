import { BrowserRouter as Router } from "react-router-dom";
import AboutPage from "./components/AboutPage/AboutPage";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="film-grain" />
            <Navbar />
            <AboutPage />
        </Router>
    );
}

export default App;
