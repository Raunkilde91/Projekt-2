import React from "react";

import firstPic from "../../Assets/1.png"
import secondPic from "../../Assets/2.png"
import thirdPic from "../../Assets/3.png"
import frontLogo from "../../Assets/Frontlogo.png";


const Frontpage = () => {

    

    return(



        

<div id = "mainContainer">

    <div className = "frontLogo">
    
     <img src = {frontLogo} alt = "logo" />
</div>


    
    
<div className = "imgFront">
        
    <img src={firstPic} alt='Logo' />
    
    <img src={secondPic} alt='Logo' />

    <img src={thirdPic} alt='Logo' />
          
       
    
</div>

<h5>And yet...more to come</h5>

</div>



    )
    
}


export default Frontpage;