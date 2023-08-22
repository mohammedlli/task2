import { Link, NavLink } from "react-router-dom"
import {days} from "./data/Days"
import {time} from "./data/Time"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
export default function TimeOfDate(){
    const [activeButton, setActiveButton] = useState("Click 1");

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };
    return<>
    <div>
        <div className="scroll">
            {
            days.map((day,index)=>(
            <div key={index}
                onClick={() => handleButtonClick(`Click ${day.num}`)}
                className={activeButton === `Click ${day.num}` ? 'click active' : 'click'}>
                    <p>{day.name}</p><p>{day.num}</p>
            </div>
            ))
            }
        </div>
        <div className="containerHours">
            <button>
                <FontAwesomeIcon size="lg" icon={faAnglesLeft} />
            </button>
            <p>Jan</p>
            <div className="scroll">
                {
                    time.map((hour,index)=>(
                        <p key={index} className="Hours" style={{color:"#6199ED"}}>{hour.hour}</p>
                    ))
                }
            </div>
            <p>Mar</p>
            <button>
                <FontAwesomeIcon size="lg" icon={faAnglesRight} />
            </button>
        </div>
    </div>
    </>
}