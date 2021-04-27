import "../Mobile/mobile.scss";
import React from "react";

import firstPic from "../../Assets/M1.png"
import secondPic from "../../Assets/M2.png"
import thirdPic from "../../Assets/M3.png"


const Frontpage = () => {

    return(
        
        <>
        
<div className = "allPictures"  style={{backgroundColor: "#c7dfee"}}>


<div className = "first">
      <img src={firstPic} alt='Logo' />  
</div>

<div className = "second">
       <img src={secondPic} alt='Logo' /> 
</div>

<div className = "third">
        <img src={thirdPic} alt='Logo' />
</div>

      
   



<h5>And yet...more to come</h5>

</div>
        </>
    
        )
}

export default Frontpage;