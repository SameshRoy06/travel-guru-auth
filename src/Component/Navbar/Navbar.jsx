import { NavLink } from "react-router-dom";

const Navbar = () => {
    const link = <>
        <li>
            <NavLink to={'/'}>News</NavLink>
        </li>
        <li>
            <NavLink to={'/destination'}>Destination</NavLink>
        </li>
        <li>
            <NavLink to={'/blog'}>Blog</NavLink>
        </li>
        <li>
            <NavLink to={'/contact'}>Contact</NavLink>
        </li>
        <li>
            <NavLink to={'/login'}>Login</NavLink>
        </li>
    </>
    return (
        <div className="container mx-auto">
            <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <img className="w-28" src="/src/assets/logo.png" alt="" />
                <input className="w-96 h-10 p-2 text-red-500 ml-52 border" type="text" name=" Search" placeholder="Search here" id="" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
        </div>
        </div>

    );
};

export default Navbar;