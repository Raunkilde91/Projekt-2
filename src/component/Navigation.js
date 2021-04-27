import React from "react";
import {Link} from    'react-router-dom'  

import back from "../Assets/back.png"
import nav1 from "../Assets/nav-1.png"
import nav2 from "../Assets/nav-2.png"
import nav3 from "../Assets/nav-3.png"

const Navigation = () => {



    return(

        <div className= "menu">

        <nav>
            <ul>    
                <li>
                    <Link to ="/back"><img src = {back} alt="back"/></Link>
                </li>               
                <li>
                    <Link to="/Darkblue"><img src = {nav1} alt= "Darkblue"/></Link>
                </li>
                <li>
                    <Link to ="/Blue"><img src = {nav2} alt="Blue"/></Link>
                </li>
                <li>
                    <Link to ="/Red"><img src = {nav3} alt="Red"/></Link>
                </li>
                 
              
            </ul>
        </nav>
        
    </div>

    
    )
}


export default Navigation;