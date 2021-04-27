
import React, {useState, useEffect} from "react";
import DesktopView from "./component/Desktop/index";
import MobileView from "./component/Mobile/index";

const windowDims = () => ({ // BRUGES TIL AT FINDE SKÆRMENS HØJDE OG BREDDE

  height: window.innerHeight,
  width: window.innerWidth
})

const App = ({items}) => { // ARROWFUNCTION

  console.log(items);

  const [dimensions, setDimenstions] = useState(windowDims()); // Når man giver en ny demensions opdaterer den siden

  useEffect(() => { // bliver kaldt hver gang en state bliver ændret. Bliver altid opdateret.

      const handleResize = () => {

          setDimenstions(windowDims())
          console.log(windowDims);

      } // End handleResize

  window.addEventListener("resize", handleResize)

  return () => {

      window.removeEventListener("resize", handleResize)
  }


  },[]);  
  
  const breakpoint = 620; // bruges til at detekte vidden på skærmen

  return dimensions.width < breakpoint ? <MobileView items = {items} /> : <DesktopView items= {items} />; // hvis dimensionswidth er mindre en 620, skal den hente vores desktopView eller MobileView
  

}

export default App;