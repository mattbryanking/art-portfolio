import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
            className="navbar"
        >
            <h1>WORK</h1>
            <h1>BMNYC</h1>
            <h1>ABOUT</h1>
        </motion.div>
    );
};

export default Navbar;
