import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import headshot from "/headshot.jpg";
import "./AboutPage.css";

const AboutPage = () => {
    const [hover, setHover] = useState(null);

    return (
        <>
            <div className="about-page">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    src={headshot}
                    alt="about"
                />
                <div className="about-page-text">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className={
                            hover != null && hover != 0
                                ? "about-text dark"
                                : "about-text"
                        }
                    >
                        <h1>BRENDAN </h1>
                        <h1>MATEO</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className={
                            hover != null && hover != 1
                                ? "about-text dark"
                                : "about-text"
                        }
                    >
                        <h1>PHOTOGRAPHER </h1>
                        <h1>&</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                        className={
                            hover != null && hover != 2
                                ? "about-text dark"
                                : "about-text"
                        }
                    >
                        <h1>VISUAL </h1>
                        <h1>STORYTELLER</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, duration: 1 }}
                        className={
                            hover != null && hover != 3
                                ? "about-text dark"
                                : "about-text"
                        }
                    >
                        <h1>NEW </h1>
                        <h1>YORK </h1>
                        <h1>CITY</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 1 }}
                        onMouseEnter={() => setHover(4)}
                        onMouseLeave={() => setHover(null)}
                        className={
                            hover != null && hover != 4
                                ? "about-text link dark"
                                : "about-text link"
                        }
                    >
                        <h1>+1 </h1>
                        <h1>917 </h1>
                        <h1>442 </h1>
                        <h1>4656</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.5, duration: 1 }}
                        onMouseEnter={() => setHover(5)}
                        onMouseLeave={() => setHover(null)}
                        className={
                            hover != null && hover != 5
                                ? "about-text link dark"
                                : "about-text link"
                        }
                    >
                        <h1>@MATEOTHEMOMENT</h1>
                    </motion.div>
                </div>
            </div>
            <Link to="/admin" className="admin-link">
                <p>SITE ADMINS</p>
            </Link>
        </>
    );
};

export default AboutPage;
