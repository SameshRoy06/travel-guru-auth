
import moment from 'moment';
import { BsCalendarDate } from 'react-icons/bs';
const Sundorbon = () => {
    return (
        <div className="container mx-auto ">
            <div className="flex mt-24">
                <div className="w-1/2 text-center  ">
                    <h1 className="text-5xl">Sundorbon</h1>
                    <p className="p-4">The Sundarbans serves as a crucial breeding ground for numerous marine and terrestrial species. Its complex ecosystem helps maintain the delicate balance of nature, acting as a natural buffer against cyclones and coastal erosion. The mangroves also play a crucial role in carbon sequestration, mitigating the effects of climate change.</p>
                </div>
                <div className="w-1/2">
                    <div className=" ">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                                <form className="card-body w-96 ">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> </span>
                                        </label>
                                        <input type="origin" placeholder="origin" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Destination</span>
                                        </label>
                                        <input type="text" placeholder="destination" className="input input-bordered" required />
                                        <div className="flex justify-between p-4 gap-4">
                                            <div>
                                                <p>From</p>
                                                <p className=" flex justify-between w-32 bg-base-200 text-xl p-4">{moment().format("MM/d")}
                                                    <BsCalendarDate className='text-2xl'></BsCalendarDate>
                                                </p>

                                            </div>
                                            <div className=''>
                                                <p>To</p>
                                                <p className=" flex justify-between w-32 bg-base-200 text-xl p-4">{moment().format("MM/d")}
                                                    <BsCalendarDate className='text-2xl'></BsCalendarDate>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary w-full">Start Booking</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sundorbon;