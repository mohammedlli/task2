import { useEffect, useRef, useState } from "react";
import {time} from "./data/Time"
export default function Test(props){
    const [scrollLeft, setScrollLeft] = useState(0);
        const divref = useRef(null)
            useEffect(() => {
                setScrollLeft(props.isscroll)
                divref.current.scrollLeft=scrollLeft;
                }, [props.isscroll]);
            console.log(props.isscroll,"hoqwuihouqgfu");
            console.log(scrollLeft,"scrollLeft");
            const handleMouseMove = (e) => {
                divref.current.scrollLeft=scrollLeft;
                };
    return<>
    <div>
        <div 
            onMouseMove={handleMouseMove}
            scrollLeft={scrollLeft}
            ref={divref}
            className="scroll"
            id="hour" style={{display:"flex"}}>
                {
                    time.map((hour,index)=>(
                        <p key={index} className="Hours" style={{color:"#6199ED"}}>{hour.hour}</p>
                    ))
                }
            </div>
    </div>
    </>
}