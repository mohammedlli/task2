import logo from "../img/IMG_E7931.JPG"
import {faBars,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { WindowSize } from '../Context/WindowContext';
export default function TopBar(){
    const windowsize = useContext(WindowSize);
    const size = windowsize.windowSize;
    return<>
        <div className={`${size <1000 ? "top-MID" : "top"}`}>
        <div className='inside-top'style={{display:size <1000? "block":"flex"}}>
            <div className={`${size <1000 ?"top-menu-search-MID":'top-menu-search'}`}>
                <button className='button-top'><FontAwesomeIcon size='2xl' icon={faBars} /></button>
                {size <1000 ?"":
                <div className='div-input-top'>
                    <input type='text' placeholder='Search'/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/>
                </div>}
                    {size < 1000 ? <h3 style={{fontWeight:"400",margin:"0"}}>Main Dashboard</h3>:""}
                    {size < 1000 ? <img className='img' src={logo} width={44} alt="" />:""}
            </div>
            {size <1000 ?
            <div 
                className='div-input-MID'>
                <input type='text' placeholder='Search'/>
                <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/>
            </div>:
            ""}

            {size <1000 ?"" :
            <div className='siction-2'> 
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