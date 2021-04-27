import React from "react";
import Redfront from "../../Assets/M3.png";
import Redlogo from "../../Assets/logo-b.png";
import Dark1 from "../../Assets/Dark1.png"
import Dark2 from "../../Assets/Dark2.png"
import Dark3 from "../../Assets/Dark3.png"

const Red = () => {

    return(
        
        <>
        <div id = "RedMobile"  style={{backgroundColor: "#ffb472"}}>

<div className = "MobileImg">
    <img src = {Redfront} alt = "logo" />
</div>


<div className = "Mobiletext">

<h1>There for you and <span className = "Redtext2">care for you </span>...</h1>

<h3>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are</h3>

<h3>
But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are
</h3>

<div className = "AllPictures">
        <div classname = "one">
            <div><img src = {Dark1} alt = "pic 1" /></div>
            <div><p>it@coolish.com</p></div>   
        </div>

        <div classname = "two">
            <div><img src = {Dark2} alt = "pic 2" /></div>
            <div><p>pr@coolish.com</p></div>   
        </div>
        <div classname = "three">
            <div><img src = {Dark3} alt = "pic 3" /></div>
            <div><p>mn@coolish.com</p></div>   
        </div>

    </div>

<div className = "RedImgLogo">
    <img src = {Redlogo} alt = "logo" />
</div>

</div>

</div>
        </>
    
        )
}

export default Red;