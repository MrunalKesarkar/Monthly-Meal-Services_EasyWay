import React, { useState, useEffect } from 'react';
import './Profile.css'; // Import CSS for styling
import Navbar from '../../components/Navbar/navbar';
import CountryState from '../../components/countrystate';

const Profile = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactno: '',
    dob: '',
    gender: '',
    address: '',
    profilePicture: ''
  });

  const [editing, setEditing] = useState(false);
  const [formValues, setFormValues] = useState(user);
  const [file, setFile] = useState(null);

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Mock API call
        const response = await fetch('/api/user/profile');
        const data = await response.json();
        setUser(data);
        setFormValues({
            ...data,
            address: `${data.address}, ${data.city}, ${data.state}, ${data.country}`
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('firstName', formValues.firstName);
    formData.append('lastName', formValues.lastName);
    formData.append('email', formValues.email);
    formData.append('contactno', formValues.contactno);
    formData.append('dob', formValues.dob);
    formData.append('gender', formValues.gender);
    formData.append('address', formValues.address);

    if (file) {
      formData.append('profilePicture', file);
    }

    try {
      const response = await fetch('/api/user/update', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setUser({ ...formValues, profilePicture: data.profilePicture });
        setEditing(false);
      } else {
        console.error('Error updating user data:', data.message);
      }
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div>
        <Navbar/>
        
    <div className="profile-page">
      <h1>Profile</h1>
      <div className="profile-info">
        <div className="profile-picture">
          <img
            src={user.profilePicture || '/default-profile-picture.png'}
            alt=""
          />
          {editing && (
            <div className="profile-picture-upload">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          )}
        </div>

        <div className="row">
        <div className="col">
            <div className="profile-field">
            <label>First Name:</label>
            {editing ? (
            <input
              type="text"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
            />
            ) : (
            <span>{user.firstName}</span>
            )}
            </div>
        </div>

        <div className="col">
            <div className="profile-field">
            <label>Last Name:</label>
            {editing ? (
            <input
              type="text"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
            />
            ) : (
            <span>{user.lastName}</span>
            )}
            </div>
        </div>
        </div>

        <div className="row">
        <div className="col">
            <div className="profile-field">
            <label>Email:</label>
            {editing ? (
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            ) : (
            <span>{user.email}</span>
            )}
            </div>
        </div>

        <div className="col">
            <div className="profile-field">
            <label>Contact no.:</label>
            {editing ? (
            <input
              type="tel"
              name="mobile"
              value={formValues.contactno}
              onChange={handleChange}
            />
            ) : (
            <span>{user.contactno}</span>
            )}
            </div>
        </div>
        </div>

        <div className="row">
            <div className="col">
                    
            <div className="profile-field">
            <label>Date of Birth:</label>
            {editing ? (
            <input
              type="date"
              name="date"
              value={formValues.dob}
              onChange={handleChange}
            />
            ) : (
            <span>{user.dob}</span>
            )}
            </div>
            </div>

            <div className="col">
            <div className="profile-field">
            <label>Gender:</label>
            {editing ? (
              <div className="gender-options">
                <div className="row">
                    <div className="col">
                    <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formValues.gender === 'Male'}
                    onChange={handleChange}
                  />
                  Male
                </label>
                </div>
                <div className="col">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formValues.gender === 'Female'}
                    onChange={handleChange}
                  />
                  Female
                </label>
                </div>

                <div className="col">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formValues.gender === 'Other'}
                    onChange={handleChange}
                  />
                  Other
                </label>
                </div>
                </div>
              </div>
              ) : (
                <span>{user.gender}</span>
              )}
            </div>
            </div>
        </div>
        

        <div className="profile-field">
          <label>Address:</label>
          {editing ? (
            <textarea
              name="address"
              value={formValues.address}
              onChange={handleChange}
            />
          ) : (
            <span>{user.address}</span>
          )}
        </div>
        <div>
            <CountryState/>
    
        </div>
      </div>

      <div className="profile-actions">
        {editing ? (
          <>
            <button onClick={handleSubmit}>Save Changes</button>
            <button onClick={handleEditToggle}>Cancel</button>
          </>
        ) : (
          <button onClick={handleEditToggle}>Edit Profile</button>
        )}
      </div>
    </div>
    </div>
  );
};

export default Profile;
