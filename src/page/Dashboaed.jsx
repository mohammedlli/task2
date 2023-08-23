import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContainerDate from "../components/ContainerDate";
import Date from "../components/Date";
import TimeOfDate from "../components/TimeOfDate";
import SideBar from "../layout/SideBar";
import TopBar from "../layout/TopBar";
import { faAngleLeft 
    ,faPlus,faComments
    ,faPrescriptionBottleMedical,
    faHospitalUser,
    faUserDoctor,
    faGaugeHigh
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Menu } from "../Context/MenuContext";
import { WindowSize } from "../Context/WindowContext";

export default function Dashboard(){
    const [isHidden, setIsHidden] = useState(true);
    const toggleDiv = () => {
    setIsHidden(!isHidden);
    };

    const windowsize = useContext(WindowSize);
    const size = windowsize.windowSize;
    console.log(size);
    const menu = useContext(Menu);
    const isOpen = menu.isOpen;
    console.log(isOpen);
    return<>
    <div onClick={toggleDiv} className="icon-page">
    <button style={{backgroundColor:"#ffff"}}> <FontAwesomeIcon style={{color:"#5156BE"}} size="lg" icon={faComments} /></button>
    <div className={`animated-div-e ${isHidden ? '' : 'show'}`}>
    <FontAwesomeIcon style={{padding:"10px 5px",color:"#5156BE"}} size="lg" icon={faGaugeHigh} />
    <FontAwesomeIcon style={{padding:"10px 5px",color:"#5156BE"}}size="lg" icon={faUserDoctor} />
    <FontAwesomeIcon style={{padding:"10px 5px",color:"#5156BE"}}size="lg" icon={faHospitalUser} />
    <FontAwesomeIcon style={{padding:"10px 5px",color:"#5156BE"}}size="lg" icon={faPrescriptionBottleMedical} />
    </div>
    </div>
    <div className="icon-r-page" style={{left:size <400 ?"83%" :size<700?"87%":size<1000? "90%":"94%"}}>
        <button style={{color:"black"}}><FontAwesomeIcon size="2xl" icon={faAngleLeft} /></button>
        <button style={{backgroundColor:"#0F6DA0" }}><FontAwesomeIcon size="2xl" icon={faPlus} /></button>
        <button style={{backgroundColor:"#FFA800"}}> <FontAwesomeIcon size="2xl" icon={faComments} /></button>
    </div>
    {size <1000 ?<div style={{display:size < 1000 ? "block":"flex"}}>
        <TopBar/>
        <div>
        <SideBar/>
            <div style={{marginTop:"15px"}}> 
            </div>
            <div>
                <ContainerDate/>
            </div>
        </div>
    </div>:""}

    {size <1000 ?"" :<div style={{display:size < 1000 ? "block":"flex"}}>
            <SideBar/>
            <div style={{width:"76.6%"}}>
                <TopBar/>
                <div style={{marginTop:"15px"}}> 
                </div>
                <div>
                    <ContainerDate/>
                </div>
            </div>
        </div>}
    </>
}


 //{/* <div style={{display:size < 768 ? "":"flex"}}>
//         <SideBar/>
//         <div style={{width:"76.6%"}}>
//             <TopBar/>
//             <div style={{marginTop:"15px"}}> 
//             </div>
//             <div>
//                 <ContainerDate/>
//             </div>
//         </div>
//     </div> */}