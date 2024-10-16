import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha  } from 'react-simple-captcha';
import { AuthContext } from '../../providers/Authprovider';
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


const Login = () => {

  const [disabled, setDisabled] = useState(true);
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
}, [])


  const handleLogin = event => {
    event.preventDefault();
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)
    signIn(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        Swal.fire({
            title: 'User Login Successful.',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
          navigate(from, { replace: true });
      })
  }

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
        setDisabled(false);
    }
    else {
        setDisabled(true)
    }
}
    return (
    <>
    <Helmet>
    <title>Helium | Login</title>
</Helmet>
<div className="hero w-full">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold justify-center text-center">Login now!</h1> <br />
     <img className='rounded-full' src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=740&t=st=1667929638~exp=1667930238~hmac=6e3ac79b100953da9f0a49351d1ed698c75f48bf8d1ea1d599378f9b9e2d25bb" alt="" />
    </div>
   {/* log in page */}
   <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <LoadCanvasTemplate />
                    </label>
                    <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                </div>
                {/* todo : disabled false */}
                <div className="form-control mt-6">
                    <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                </div>
                <SocialLogin></SocialLogin>
                <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
              
            </form>
            
  </div>
</div>
</>
    );
};

export default Login;