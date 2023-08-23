import MenuIcon from '@mui/icons-material/Menu';
import logo from "../img/IMG_E7931.JPG"
import {faBars,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Menu } from '../Context/MenuContext';
import { WindowSize } from '../Context/WindowContext';
export default function TopBar(){
    const windowsize = useContext(WindowSize);
    const size = windowsize.windowSize;
    console.log(size);
    const menu = useContext(Menu);
    const isOpen = menu.isOpen;
    console.log(isOpen);
    return<>
        <div className="top" style={{padding:size <1000 ?"15px 10px":"20px 20px"
    ,boxShadow:size <1000 ? "none" :" 3px 0 4px rgba(0, 0, 0, 0.2)"}}>
        <div className='inside-top'style={{display:size <1000? "block":"flex"}}>
            <div className={`${size <1000 ?"top-menu":'top-menu-search'}`}>
                <button className='button-top'><FontAwesomeIcon size='2xl' icon={faBars} /></button>
                {size <1000 ?"":<div className='div-input-top'>
                    <input type='text' placeholder='Search'/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/>
                </div>}
                    {size < 1000 ? <h3 style={{fontWeight:"400",margin:"0"}}>Main Dashboard</h3>:""}
                    {size < 1000 ? <img className='img' src={logo} width={44} alt="" />:""}
            </div>
            {size <1000 ?<div className='div-input'>
                    <input type='text' placeholder='Search'/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/>
                </div>:""}
            {size <1000 ?"" :<div className='siction-2'> 
            <div className='siction-2-div1'>
                <div style={{paddingRight:"10px"}}>
                <h3>Haider Fadel</h3>
                <p style={{direction:"rtl",fontWeight:"200"}}>Admin</p>
                </div>
                <img className='img' src={logo} width={44} alt="" />
            </div>
                <button className='button-top'><FontAwesomeIcon size='2xl' icon={faBars} /></button>
                <button className='button-top'><FontAwesomeIcon size='2xl' icon={faBars} /></button>
                <button className='button-top'><FontAwesomeIcon size='2xl' icon={faBars} /></button>
            </div>}
        </div>
        
        </div>
    </>
}