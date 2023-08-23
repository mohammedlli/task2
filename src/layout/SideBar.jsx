import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import logo from "../img/gymmm.png"
import {links} from "./NavLink"
import { useContext } from "react";
import { WindowSize } from "../Context/WindowContext";
export default function SideBar(){
    const windowsize = useContext(WindowSize);
    const size = windowsize.windowSize;
    console.log(size);
    return<>
    <div  className={`${size < 1000 ? "sidew":"side"}`} >
        {size <1000 ? "" :<div className="Title-sid">
            <img src={logo} style={{borderRadius:"100%"}} width={40} alt="" />
            <p>AZU company</p>
        </div>}
        {links.map((side,index)=>(
    <NavLink
    key={index}
    to="/" 
    className='side-bar-link'>
    <FontAwesomeIcon className="icon-side" icon={side.icon} size="xl" style={{color:"#8183BA"}}/>
    <p>{side.name}</p>
    </NavLink>))}
    </div>
    </>
}