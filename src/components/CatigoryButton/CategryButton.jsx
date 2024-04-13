import React ,{useEffect} from 'react';
import './style.css'; 
import Aos from 'aos';
import 'aos/dist/aos.css'

const CatigryButton = (props) => {
  useEffect(()=>{
    Aos.init()
  },[]);
  return (
      <div className="imageButton" data-aos="fade-up" onClick={()=>{ props.onClick(props.id)}} >
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