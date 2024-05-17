import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { auth, storage } from "../../firebase-config";
import "./AdminPage.css";

const AdminPage = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [images, setImages] = useState([]);

    // IMAGES WILL BE ORDERED BY UPLOAD DATE. WHEN THE USER REARRANGES OR ADDS A NEW IMAGE, DELETE ALL IMAGES AND REUPLOAD THEM IN THE DESIRED ORDER.

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

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(images);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setImages(items);
    };

    const handleDelete = (id) => {};

    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div className="admin-page">
            <h1>Howdy, {user?.displayName.split(" ")[0]}</h1>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="images">
                    {(provided) => (
                        <table
                            className="image-table"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            <thead>
                                <tr>
                                    <th className="th">Image</th>
                                    <th className="th">URL</th>
                                    <th className="th"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {images.map((image, index) => (
                                    <Draggable
                                        key={image}
                                        draggableId={image}
                                        index={index}
                                    >
                                        {(provided) => (
                                            <tr
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <td className="td">
                                                    <img
                                                        src={image}
                                                        alt={`Image ${index}`}
                                                        className="img"
                                                    />
                                                </td>
                                                <td className="td">{image}</td>
                                                <td className="td">
                                                    <button
                                                        onClick={() =>
                                                            handleDelete(index)
                                                        }
                                                        className="button"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </tbody>
                        </table>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default AdminPage;
