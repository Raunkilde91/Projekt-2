
import React from "react";
import Darkbluefront from "../../Assets/M1.png"
import Darklogo from "../../Assets/logo-a.png"

const Darkblue = () => {

    return(
        
    <>
  <div id = "Mobile"  style={{backgroundColor: "#bfddef"}}>

<div className = "MobileImg">
    <img src = {Darkbluefront} alt = "logo" />
</div>


<div className = "Mobiletext">

<h1>Design is the <span className = "Darktext2">Matter of choice </span>...</h1>

<h3>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are</h3>

<h3>
But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are
</h3>

<div className = "BlueImgLogo">
    <img src = {Darklogo} alt = "logo" />
</div>

</div>

</div>

    </>

    )
   

}

export default Darkblue;