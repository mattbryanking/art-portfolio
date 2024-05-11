import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { auth, storage } from "../../firebase-config";
import "./AdminPage.css";

const AdminPage = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    // test json object
    const [images, setImages] = useState([
    
    ]);

    console.log(user);
    if (!user) {
        navigate("/login");
    }

    const fetchImages = async () => {
        const imageListRef = ref(storage, "images/");
        try {
            const imageList = await listAll(imageListRef);
            const urls = await Promise.all(
                imageList.items.map(async (item) => {
                    return await getDownloadURL(item);
                })
            );
            console.log(urls);
            setImages(urls);
        } catch (error) {
            console.log(error);
        }
    };

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const storageRef = ref(storage, `images/${file.name}`);
        try {
            await storageRef.put(file);
            console.log("Uploaded a file");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div className="admin-page">
            <h1>Howdy, {user?.displayName.split(" ")[0]}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {images.map((image, index) => (
                        <tr key={index}>
                            <td>
                                <img src={image} alt="image" />
                            </td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;
