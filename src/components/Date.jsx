import React, { useState } from 'react';
import logo from "../img/IMG_E7931.JPG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown} from '@fortawesome/free-solid-svg-icons';
export default function Date(props) {
    const [isHidden, setIsHidden] = useState(true);
    
        const toggleDiv = () => {
        setIsHidden(!isHidden);
        };
        return (
        <div>

            <div>
            <div onClick={toggleDiv} className='Container-Date'
            style={{backgroundImage:`linear-gradient(to left , ${props.color2}, ${props.color1})`}}>
                <div className='Date-Title-Text'>
                    <img src={logo} style={{borderRadius:"50%"}} width={60} alt="" />
                    <p>Hadier Fadel Jasim<br/>New patient</p>
                </div>
                <div>
                    <button style={{borderRadius:"50%",border:"none"}}><FontAwesomeIcon className={`rotate-button ${isHidden ? 'rotate' : ''}`} icon={faAnglesDown} /></button>
                </div>
                <div className={`animated-div-r ${isHidden ? '' : 'show'}`}
                style={{backgroundColor:`${props.contentColor}`}}>
                    <p>Surgery at 8PM</p>
                </div>
                <div className={`animated-div-b ${isHidden ? '' : 'show'}`}
                style={{backgroundColor:`${props.contentColor}`}}>
                    <h3 style={{margin:"0"}}>DX:</h3>
                    <p style={{margin:"0"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,totam! Nulla qui delectus sunt, incidunt fuga itaque quo vel quis laboriosam dolor, blanditiis minus corrupti magni autem quod earum doloribus!</p>
                </div>
            </div>
            </div>
        </div>
        )
    }