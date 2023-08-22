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
import { useState } from "react";

export default function Dashboard(){
    const [isHidden, setIsHidden] = useState(true);
    const toggleDiv = () => {
    setIsHidden(!isHidden);
    };
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
    <div className="icon-r-page">
        <button style={{color:"black"}}><FontAwesomeIcon size="2xl" icon={faAngleLeft} /></button>
        <button style={{backgroundColor:"#0F6DA0" }}><FontAwesomeIcon size="2xl" icon={faPlus} /></button>
        <button style={{backgroundColor:"#FFA800"}}> <FontAwesomeIcon size="2xl" icon={faComments} /></button>
    </div>
    <div style={{display:"flex"}}>
        <SideBar/>
        <div style={{width:"76.6%"}}>
            <TopBar/>
            <div style={{marginTop:"15px"}}> 
                <TimeOfDate/>
            </div>
            <div>
                <ContainerDate/>
            </div>
        </div>
    </div>
    </>
}