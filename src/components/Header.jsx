import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log('Logged Out'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><NavLink className={({ isActive, isPending }) =>
              isActive
                ? ("text-green-500")
                : isPending
                  ? "pending"
                  : ("text-black")
            } to="/">Home</NavLink></li>

<li><NavLink className={({ isActive, isPending }) =>
              isActive
                ? ("text-green-500")
                : isPending
                  ? "pending"
                  : ("text-black")
            } to="/user">User Profile</NavLink></li>



            <li><NavLink className={({ isActive, isPending }) =>
              isActive
                ? ("text-green-500")
                : isPending
                  ? "pending"
                  : ("text-black")
            } to="/profile">Update Profile</NavLink></li>

           
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-purple-500 font-bold">Heaven's Nest</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink className={({ isActive, isPending }) =>
              isActive
                ? ("text-green-500")
                : isPending
                  ? "pending"
                  : ("text-black")
            } to="/">Home</NavLink></li>

<li><NavLink className={({ isActive, isPending }) =>
              isActive
                ? ("text-green-500")
                : isPending
                  ? "pending"
                  : ("text-black")
            } to="/user">User Profile</NavLink></li>



            <li><NavLink className={({ isActive, isPending }) =>
              isActive
                ? ("text-green-500")
                : isPending
                  ? "pending"
                  : ("text-black")
            } to="/profile">Update Profile</NavLink></li>

            

          </ul>
        </div>
        <div className="navbar-end dropdown dropdown-end flex justify-end">


        {
            user ? (
              <div className='flex justify-center items-center'>
               
        
               <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                  <div className="w-10 rounded-full " >
                    <img className="rounded-full" alt="Profile Image" src={user? user.photoURL:  "https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png"}
 />
                 </div>
                </div>
                <a className='btn btn-sm bg-white border-0' onClick={handleLogOut}>Logout</a>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm bg-accent">Login</button>
              </Link>
            )
          }
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Header;
