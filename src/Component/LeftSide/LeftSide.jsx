
import { Link } from "react-router-dom";


const LeftSide = () => {
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('/public/data.json')
    //     .then(res=>res.json())
    //     .then(data => setData(data))
    // },[])
    return (
        <div>
            <div className="relative mt-6 flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        COX'S BAZAR
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ..
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <a
                        className="!font-medium !text-blue-gray-900 !transition-colors hover:!text-pink-500"
                        href="#"
                    >
                        <button
                            className="flex select-none items-center gap-2 bg-orange-400 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            <Link to={'/'}>Booking Me</Link>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;