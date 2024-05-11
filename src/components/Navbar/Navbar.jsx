import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ delay: 3.5, duration: 1 }}
            className="navbar"
        >
            <Link to="/work">
                <h1>WORK</h1>
            </Link>
            <h1>BMNYC</h1>
            <Link to="/">
                <h1>ABOUT</h1>
            </Link>
        </motion.div>
    );
};

export default Navbar;
