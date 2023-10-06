import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import img from "./../../assets/Rectangle 1.png"; 


const Route = () => {
    return (
        <div style={{backgroundImage: `url(${img})`}}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Route;