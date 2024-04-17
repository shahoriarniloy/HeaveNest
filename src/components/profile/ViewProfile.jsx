
import { useContext} from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ViewProfile = () => {
  const { user } = useContext(AuthContext);





  return (
    <div className="max-w-[1400px] m-auto">
      <Helmet>
                <title>View Profile</title>
            </Helmet>
      <h1 className="text-center text-4xl text-purple-900 font-bold mt-4 lg:mt-12">Profile</h1>
    



      <div className="card card-side bg-blue-100 shadow-xl mt-6 lg:mt-20 flex lg:flex-row md:flex-row flex-col gap-0 border-purple-600">
        <figure ><img src={user.photoURL} alt="ProfilePicture"/></figure>
            <div className="card-body mt-24">
                <h2 className="card-title text-3xl">Name: {user.displayName}</h2>
                <p className="text-xl text-purple-500"><span className="text-black font-bold">Email: </span>{user.email}</p>
                <div className="card-actions justify-end">
                <Link to="/profile"  ><button className="btn btn-warning text-bold">Edit Profile</button></Link>
            </div>
        </div>
</div>






    </div>
  );
};

export default ViewProfile;
