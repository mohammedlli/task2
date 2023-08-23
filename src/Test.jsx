import {  useRef, useState } from "react";
import Date from "./components/Date";

export default function Test1(){
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(null);
    const [scrollLeft, setScrollLeft] = useState(0);
        const divref = useRef(null)
        const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.clientX);
        };

        const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const deltaX = e.clientX - startX;
        setScrollLeft(scrollLeft - deltaX);
        setStartX(e.clientX);
        divref.current.scrollLeft=scrollLeft;
        console.log(scrollLeft);
        };
    
        const handleMouseUp = () => {
        setIsDown(false);
        };
    
    return<>
    <div 
        style={{
            display:"flex",
        height: '200px',
        overflowX: 'scroll',
        cursor: isDown ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        ref={divref}
        scroll
    className="items">
        <Date/>
        <Date/>
        <Date/>
        <Date/>
        <Date/>
        <Date/>
        <Date/>
        <Date/>
        <Date/>
        <Date/>
        <Date/>
        <Date/>

    </div>
    </>
}