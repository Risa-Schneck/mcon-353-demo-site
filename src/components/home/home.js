import React, {useState} from "react";
import Badge from '@mui/material/Badge';
import Slider from '@mui/material/Slider';
import picture from "../../images/IMG_1098.jpg";


export function Home() {

const [value, setValue] = useState(55);
 

  return (
    <div className="App">
       <center>
       <h1>Welcome to My Home Page</h1>
       <p>Hi! I'm an aspiring computer programmer who currently teaches high school math. 
         I'm hopefully graduating at the end of the summer and going into an internship working with databases,
         which I love. I love reading, sewing, sunsets, and beaches.
       </p>

       <p>Here's my favorite picture of a sunset over a beach. Combining two favorite things is always a great way to go.
           
       </p>

       <img src={picture} alt="Sunset over a beach" width = "500" height = "500"></img>
       <p>
          <a href="https://travel.usnews.com/rankings/best-beaches-in-the-world/">Click here to view the 15 best beaches in the world</a>
       </p>
       <p>Click on the badge below to view my full LinkedIn profile</p>
       <a href="https://www.linkedin.com/in/risa-salel-83175720b/"><Badge badgeContent={"RS"} color="primary" className="badge"></Badge></a>
  
    
      <Slider value={55}></Slider>
      </center>
    </div>

  );

  
}
