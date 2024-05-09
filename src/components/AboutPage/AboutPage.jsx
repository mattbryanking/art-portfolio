import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import about from "../../../public/about.jpg";
import "./AboutPage.css";

const client_id = import.meta.env.VITE_INSTAGRAM_APP_ID;
const client_secret = import.meta.env.VITE_INSTAGRAM_APP_SECRET;

const AboutPage = () => {
    const [hover, setHover] = useState(null);
    const { scrollYProgress } = useScroll();

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const events = useTransform(scrollYProgress, value =>
        value < 0.3 ? 'auto' : 'none'
    );

    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch images from Unsplash API
        const fetchInstagramImages = async () => {
            const res = await fetch(
                "https://api.instagram.com/oauth/authorize",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "client_id": client_id,
                        "client_secret": client_secret,
                        "scope": "user_profile,user_media",
                        "grant_type": "authorization_code",
                    },
                }
            );

            const data = await res.json();
            console.log(data);
        }

        fetchInstagramImages();
    }, []);


    return (
        <motion.div
            className="about-page"
            style={{ scale: scale, opacity: opacity, pointerEvents: events }}
        >
            <div className="about-page-container">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    src={about}
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
                        <h1>BRENDAN</h1>
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
                        <h1>PHOTOGRAPHER &nbsp;</h1>
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
                        <h1>VISUAL</h1>
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
                        <h1>NEW</h1>
                        <h1>YORK</h1>
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
                        <h1>+1</h1>
                        <h1>917</h1>
                        <h1>442</h1>
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
        </motion.div>
    );
};

export default AboutPage;
