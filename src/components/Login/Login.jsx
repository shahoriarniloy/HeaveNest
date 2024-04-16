import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import auth from "../../firebase/firebase.init";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";

const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        console.log(email, password);

        signInUser(email,password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .catch(error=> console.error(error))


    }

   
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                navigate('/');

                
                setUser(loggedInUser);

            })
            .catch(error => {
                console.log('error', error.message);
            });
    };

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                navigate('/');

                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="max-w-[1400px] m-auto">
            <form onSubmit={handleLogin} className="flex flex-col  items-center h-screen">
                <div className="w-1/2">
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Enter Your Email:</span>
                        </div>
                        <input type="text" name="email" placeholder="Type here" className="input input-bordered" />
                    </label>

                    <label  className="form-control mb-2">
                        <div className="label">
                            <span className="label-text">Enter Your Password:</span>
                        </div>
                        <div className="grid grid-cols-12 items-center">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Type here"
                                className="input input-bordered rounded-r-none border-r-0 col-span-11"
                                required
                            />
                            <button
                                type="button" 
                                className="btn btn-outline p-0 rounded-l-none border-l-0 border-gray-300"
                                aria-label="Toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </div>


                    </label>


                   
                </div>

                <input type="submit" value="Log In" className="btn btn-success w-60 text-white" />

                
            {user ? (
                        <button onClick={handleGoogleSignOut} className="btn btn-red mt-0">Sign Out</button>
                    ) : (
                        <div>
                            <h2 className="text-sm text-center text-gray-600  mt-6 mb-4">Or, Sign In With:</h2>

                            <button onClick={handleGoogleSignIn} className="btn btn-warning mr-4">Google Login</button>
                            <button onClick={handleGitHubSignIn} className="btn btn-warning">GitHub Login</button>
                        </div>
                    )}

                    {user && (
                        <div>
                            <h3>User: {user.displayName}</h3>
                        </div>
                    )}
                    <hr />
                    <h2 className="text-sm text-gray-600  mt-6 mb-4">Or,</h2>
                    <Link to="/signup"><button className="btn btn-primary w-60">Create New Account</button></Link>

            </form>



        </div>
    );
};

export default Login;
