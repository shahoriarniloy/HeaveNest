
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName || "");
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");

  const handleSaveChanges = () => {
    updateUserProfile(name, photoURL)
      .then(() => {
        alert("Profile updated successfully");

        
        console.log("Profile updated successfully");
      })
      .catch((error) => {
        console.error("Error updating profile:", error.message);
      });
  };

  return (
    <div className="max-w-[1400px] m-auto">
      <Helmet>
                <title>Update Profile</title>
            </Helmet>
      <h1 className="text-center text-4xl text-purple-900 ">Profile</h1>
      <form onSubmit={handleSaveChanges}>
      <label className="form-control">
            <div className="label">
                <span className="label-text">Name</span>
            </div>
            <input type="text" value={name}
            onChange={(e) => setName(e.target.value)}  className="input input-bordered" />
        </label>

        <label className="form-control">
            <div className="label">
                <span className="label-text">Picture URL</span>
            </div>
            <input type="text" value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}  className="input input-bordered" />
        </label>




        
        
      
        <button className="btn btn-success mt-4 w-64 p-0 " type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile;
