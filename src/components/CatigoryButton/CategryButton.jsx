import React from 'react';
import './style.css'; 

const CatigryButton = (props) => {

  return (
      <div className="imageButton" onClick={()=>{ props.onClick(props.id)}} >
        <span className="imageSrc" style={{ backgroundImage: "url('/images/" + props.ImageURL + "')"}}></span>
        <span className="imageBackdrop"></span>
        <span className="image">
          <span className="imageText">
            {props.name}
            <span className="imageMarked"></span>
          </span>
        </span>
      </div>
      )}


export default CatigryButton;