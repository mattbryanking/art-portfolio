import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import AdminPage from "./components/AdminPage/AdminPage";
import AboutPage from "./components/AboutPage/AboutPage";
import WorkPage from "./components/WorkPage/WorkPage";
import Navbar from "./components/Navbar/Navbar";
import background from "/background.mp4";
import "./App.css";

function App() {
    return (
        <Router>
            <video autoPlay loop muted className="background-video">
                <source src={background} type="video/mp4" />
            </video>
            <div className="film-grain" />
            <Navbar />

                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/" element={<AboutPage />} />
                    <Route path="/work" element={<WorkPage />} />
                </Routes>
        </Router>
    );
}

export default App;
