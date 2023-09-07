import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/Authprovider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const{googleSignIn} =useContext(AuthContext);

    const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
      googleSignIn()
          .then(result => {
              const loggedInUser = result.user;
              console.log(loggedInUser);
              const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
              fetch('https://resturent-server.onrender.com/users', {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json'
                  },
                  body: JSON.stringify(saveUser)
              })
                  .then(res => res.json())
                  .then(() => {
                      navigate(from, { replace: true });
                  })
          })
  }
    return (
        <div>
              <div className="flex flex-col w-full border-opacity-50">

  <div className="divider">Or</div>
</div>
              <button onClick={handleGoogleSignIn} className="btn btn-error bg-red-600 w-full"> <FaGoogle className="w-6 h-6 " />Google Log In</button>
        </div>
    );
};

export default SocialLogin;