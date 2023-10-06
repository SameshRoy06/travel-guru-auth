
import moment from 'moment';
import { BsCalendarDate } from 'react-icons/bs';
const Sreemongol = () => {
    return (
        <div className="container mx-auto ">
        <div className="flex mt-24">
            <div className="w-1/2 text-center  ">
                <h1 className="text-5xl">Cox's Bazar</h1>
                <p className="p-4">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
            </div>
            <div className="w-1/2">
                <div className=" ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                            <form className="card-body w-96 ">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Origin</span>
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

export default Sreemongol;