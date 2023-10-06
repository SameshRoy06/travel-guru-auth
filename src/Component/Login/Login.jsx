import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body w-96">
                            <h2 className="text-center text-4xl">Please Login</h2>
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

                                <div className="flex justify-end p-4">
                                   <input type="checkbox" name="Read Me" id="" /> <p className="text-sm ml-2">ReadMe</p>
                                    <p> <a href="#" className=" flex justify-end label-text-alt link link-hover">Forgot password?</a></p>
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                            <p>Don't have an Account? <Link to={'/register'} className="text-blue-600 font-bold">Create an Account</Link>.</p>
                        </div>
                        </form>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;