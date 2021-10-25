import React from "react";
import "./Opstyle.css";
import { Link } from "react-router-dom";
import "../../components/OpGrid/Opstyle.css"


const OpGrid = ({ dataImg }) => {
  return (
    
      <div className="youngContainer">
        {dataImg.map((item) => (
          <div key={item.id} className="lostInTranslation">   
          <div  className="wrappy">
            <Link to={item.imageLink}>
              
                <img className="vignettes" src={item.img} alt={item.id} />
                <div className="carte"> vendu</div>
                
                <div className="imgLayer">
                <p className="opName">{item.name}</p>
                
              </div>
              
              </Link>
              <Link className="lego" to={item.imageLink}>{item.name}</Link>
           
              <div className="ghostdiv"></div>
          </div>
          
          </div>
        ))}
      </div>
    
  );
};

export default OpGrid;
