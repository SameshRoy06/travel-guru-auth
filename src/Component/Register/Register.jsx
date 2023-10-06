import { Link } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const Register = () => {
    return (
        <div className="container mx-auto">
            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body w-96 border-red-400">
                            <h2 className="text-center text-4xl">Create an Account</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" placeholder="last name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text"> Confirm Password</span>
                                </label>
                                <input type="password" placeholder="confirm password" className="input input-bordered" required />

                                <div className="flex justify-end p-4">
                                    <input type="checkbox" name="Read Me" id="" /> <p className="text-sm ml-2">ReadMe</p>
                                    <p> <a href="#" className=" flex justify-end label-text-alt link link-hover">Forgot password?</a></p>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Create Account</button>
                            </div>
                            <div>
                                <p>Already have an Account? <Link to={'/login'} className="text-blue-600 font-bold">Login</Link>.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="text-center mb-4  ">
              <p className="p-2">Or</p> 
              <div className="flex justify-center">
              
                <a  className="bg-gray-100 flex justify-center w-96 p-4 mb-2 items-center rounded-xl"  href=""> <FaFacebook className="mr-24"></FaFacebook>Continue With Facebook</a>
              </div>
              <div className="flex justify-center">
                <a className="bg-gray-100 flex justify-center w-96 mb-2 p-4 items-center rounded-xl" href=""> <FcGoogle className="mr-24"></FcGoogle>Continue With Google</a>
                </div>
            </div>
        </div>

    );
};

export default Register;