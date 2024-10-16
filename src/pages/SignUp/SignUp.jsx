import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/Authprovider';
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';


 

const SignUp = () => {
  
     const {createUser, updateUserProfile} = useContext(AuthContext)
     const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                // Profile updated!
                const saveUser ={name: data.name , email: data.email}
                fetch('https://resturent-server.onrender.com/users', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                      },
                        body: JSON.stringify(saveUser), 
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId) {
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    }
                        
                })
               
              }).catch((error) => {
                // An error occurred
                // ...
              });
          })
    };

   

    return (
        <>    <Helmet>
        <title>Helium | Sign Up</title>
    </Helmet>
        <div className="hero w-full">
        <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold justify-center text-center">Signup now!</h1> <br />
           <img className='rounded-full' src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-2650.jpg?w=740&t=st=1692522774~exp=1692523374~hmac=85f5c9b9ae83caa40b9fb7476a813c2bd4d835e872d8c810be7581d97706fa4f" alt="" />
          </div>
         {/* log in page */}
      
         <form  onSubmit={handleSubmit(onSubmit)}
          className="card-body">
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name"  {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                    {errors.name && <span className='text-red-600'>This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="name"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                    {errors.photoURL && <span className='text-red-600'>This field is required</span>}
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                    {errors.email && <span className='text-red-600'>Email is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password"  {...register("password",{ required: true,
                     minLength: 6,
                     maxLength: 20,
                     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                    })} name="password" placeholder="password" className="input input-bordered" />
                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                    {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 Character</p>}
                    {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less than 20 characters</p>}
                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <input  className="btn btn-primary" type="submit" value="SignUp" />
                </div>
                <SocialLogin></SocialLogin>
                <p><small>New Here?<Link to="/login">Already Have An Account Login Now </Link>  </small></p>
            </form>
        </div>
      </div>
      </>
    );
};

export default SignUp;