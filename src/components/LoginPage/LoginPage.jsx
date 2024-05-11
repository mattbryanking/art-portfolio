import React from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { auth } from "../../firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./LoginPage.css";

const LoginPage = () => {
    const navigate = useNavigate();

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                if (result.user) {
                    console.log("Successfully signed in with Google");
                    navigate("/admin");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="login-page">
                <GoogleButton
                    type="light"
                    style={{ position: "relative", zIndex: 1000 }}
                    onClick={signInWithGoogle}
                >
                    Sign in with Google
                </GoogleButton>
            </div>
        </>
    );
};

export default LoginPage;
