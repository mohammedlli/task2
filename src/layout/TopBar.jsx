import MenuIcon from '@mui/icons-material/Menu';
import logo from "../img/IMG_E7931.JPG"
import {faBars,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TopBar(){
    return<>
        <div className="top">
        <div className='inside-top'>
            <div className='top-menu-search'>
                <button className='button-top'><FontAwesomeIcon size='2xl' icon={faBars} /></button>
                <div className='div-input-top'>
                    <input type='text' placeholder='Search'/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='xl'/></div>
            </div>
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
            </div>
        </div>
        
        </div>
    </>
}