import {days} from "./data/Days"
import {time} from "./data/Time"
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
export default function TimeOfDate(props){
    const [activeButton, setActiveButton] = useState("Click 1");
    const handleButtonClick = (button) => {
        setActiveButton(button);
    };
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isscroll , setisScroll] = useState(0);
        const divref = useRef(null)
        const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.clientX);
        };

        const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const deltaX = e.clientX - startX;
        setScrollLeft(scrollLeft - deltaX *3);
        setStartX(e.clientX);
        divref.current.scrollLeft=scrollLeft;
        };
        const handleMouseUp = () => {
        setIsDown(false);
        };
        const hanleScroll = (e) => {
            const {scrollLeft} = e.currentTarget;
            setisScroll(scrollLeft)
            };
                const divr = useRef(null)
            useEffect(() => {
                setScrollLeft(props.isscroll)
                divr.current.scrollLeft=scrollLeft;
                }, [props.isscroll]);
            console.log(props.isscroll,"hoqwuihouqgfu");
            console.log(scrollLeft,"scrollLeft");
    return<>
    <div>
    <div 
        style={{
        cursor: isDown ? 'grabbing' : 'grab',
        display:"flex"
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onScroll={hanleScroll}
        scrollLeft={scrollLeft}
        ref={divref}
        className="scroll"
        id="hour">
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
            <div 
                onMouseMove={handleMouseMove}
                scrollLeft={scrollLeft}
                ref={divr}
                className="scroll"
                id="hour" style={{display:"flex"}}>
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