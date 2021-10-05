import React from "react";
import "./Opstyle.css";
import { Link } from "react-router-dom";

import { Container } from "../../globalStyles";

const OpGrid = ({ dataImg }) => {
  return (
    <Container className="container">
      <div className="youngContainer">
        {dataImg.map((item) => (
          <div className="lostInTranslation">   
          <div key={item.id} className="wrappy">
            <Link to={item.imageLink}>
              
                <img className="vignettes" src={item.img} alt={item.id} />
                
                <div className="imgLayer">
                <p className="opName">{item.name}</p>
                
              </div>
              </Link>
              <Link className="lego" to={item.imageLink}>{item.name}</Link>
           
          </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default OpGrid;
