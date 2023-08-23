import { useRef, useState } from "react";
import Date from "./Date";
import Test from "./Test"
import TimeOfDate from "./TimeOfDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {time} from "./data/Time"
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function ContainerDate(){
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
    return<>
    
        <div><TimeOfDate isscroll={isscroll}/></div>
    <div 
        style={{
        cursor: isDown ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onScroll={hanleScroll}
        scrollLeft={scrollLeft}
        ref={divref}
        className="ContainerDate"
        id="hour">
            <div
            className="date-div">
            <Date 
            color1="#E9545F" 
            color2="#F8959C" 
            contentColor="#FAACB2"/>
            <Date 
            color1="#AEBACB" 
            color2="#E1E7F1"
            contentColor="#E9EEF5"/>
        </div>
        <div className="date-div" >
            <Date 
            color1="#FFBC3A" 
            color2="#FFCE6F"
            contentColor="#FFD88D"/>
        </div>
        <div className="date-div" style={{justifyContent:"start",paddingLeft:"40px"}}>
            <Date 
            color1="#555AC3" 
            color2="#8388FE"
            contentColor="#9B9FFF"/>
        </div>
        </div>
    </>
}