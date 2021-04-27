import "./App2.scss"
import React from "react";
import Bluefront from "../../Assets/Bluefront1.png"



const Blue = () => {

    return(

<>
<div id = "Blue" style={{backgroundColor: "#bfddef"}}>

        <div className = "Bluefront">
            <img src = {Bluefront} alt = "logo" />
        </div>


<div className = "Bluetxt">

<h1>Keeping you alll <span className = "Bluetext">upto date </span>...</h1>

<h3>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are</h3>

<h3>
But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are
</h3>

<h5>MaintAble</h5>

</div>

</div>

</>
);

}

export default Blue;