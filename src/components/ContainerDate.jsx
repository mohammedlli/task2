import Date from "./Date";

export default function ContainerDate(){
    return<>
    <div className="ContainerDate">
        <div className="date-div">
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