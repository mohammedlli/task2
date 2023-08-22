import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import logo from "../img/gymmm.png"
import {links} from "./NavLink"
export default function SideBar(){
    return<>
    <div className="side">
        <div className="Title-sid">
            <img src={logo} style={{borderRadius:"100%"}} width={40} alt="" />
            <p>AZU company</p>
        </div>
        {links.map((side,index)=>(
    <NavLink
    key={index}
    to="/" 
    className='side-bar-link'>
    <FontAwesomeIcon icon={side.icon} size="xl" style={{color:"#8183BA"}}/>
    <p>{side.name}</p>
    </NavLink>))}
    </div>
    </>
}