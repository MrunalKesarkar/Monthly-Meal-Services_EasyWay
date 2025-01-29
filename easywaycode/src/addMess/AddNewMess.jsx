import React, { useState } from 'react';
import axios from 'axios';
import Alert from '../alert/alert';
import './AddNewMess.css';
import { config } from '../services/config';
import Navbar from '../components/Navbar/navbar';

const AddNewMess = () => {
    const [newMess, setNewMess] = useState({
        name: "",
        location: "",
        capacity: "",
        price: "",
        cuisine: "",
        image: null,
    });

    const [alert, setAlert] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMess({
            ...newMess,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setNewMess({
            ...newMess,
            image: e.target.files[0],
        });
    };

    const resetInputField = () => {
        setNewMess({
            name: "",
            location: "",
            capacity: "",
            price: "",
            cuisine: "",
            image: null,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', newMess.name);
            formData.append('location', newMess.location);
            formData.append('capacity', newMess.capacity);
            formData.append('price', newMess.price);
            formData.append('cuisine', newMess.cuisine);
            formData.append('image', newMess.image);

            await axios.post(`${config.serverUrl}/messes/add`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setAlert(true);
            resetInputField();
        } catch (error) {
            console.error("Error adding the mess:", error);
        }
    };

    return (
        <React.Fragment>
            {alert && <Alert message={"Mess added successfully!"} />}
            <Navbar />
            <div className="title my-3 text-center">
                <h2>Add New <b>Mess</b></h2>
            </div>

            <form className="addmess" onSubmit={handleSubmit}>
                <div className="mb-3 itemdata">
                    <label htmlFor="name" className="form-label">Mess Name</label>
                    <input
                        name="name"
                        type="text"
                        className="form-control"
                        value={newMess.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 itemdata">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input
                        name="location"
                        type="text"
                        className="form-control"
                        value={newMess.location}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 itemdata">
                    <label htmlFor="capacity" className="form-label">Capacity</label>
                    <input
                        name="capacity"
                        type="number"
                        className="form-control"
                        value={newMess.capacity}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 itemdata">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input
                        name="price"
                        type="number"
                        className="form-control"
                        value={newMess.price}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 itemdata">
                    <label htmlFor="cuisine" className="form-label">Cuisine</label>
                    <input
                        name="cuisine"
                        type="text"
                        className="form-control"
                        value={newMess.cuisine}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3 itemdata">
                    <label htmlFor="image" className="form-label">Mess Image</label>
                    <input
                        type="file"
                        name="image"
                        className="form-control"
                        onChange={handleFileChange}
                    />
                </div>
                <div className="itemdata d-inline-flex">
                    <button type="submit" className="btn btn-danger px-5 mx-2 rounded-pill">Add</button>
                    <button type="button" onClick={resetInputField} className="btn btn-danger px-5 rounded-pill">Reset</button>
                </div>
            </form>
        </React.Fragment>
    );
};

export default AddNewMess;
