import React ,{useEffect,useState} from 'react';
import CategryButton from '../../components/CatigoryButton/CategryButton';
import './style.css'; 
import {useNavigate} from "react-router-dom"
import Aos from 'aos';
import 'aos/dist/aos.css'
import Popup from '../../components/PopUpMessage/PopUpMessage';


const HomePage = () => {
  const [toPage,setToPage] = useState("")
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };
  let navigate = useNavigate();
    useEffect(()=> {
      Aos.init();
     toPage ==="Home"? navigate(`/`):navigate(`/${toPage}`) 
    },[toPage,navigate])
    function handleOnClick(page){
      setToPage(page)
      
    }

    return (
      
    <div className="container" data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000">
      
      {showPopup && <Popup message="קנאפה נאבלסיה בטעם קרם-בורלה" onClose={closePopup} />}

      <CategryButton id="dessertsMenu" onClick={handleOnClick} name={`קינוח מפנק`} ImageURL={`desserts.jpg`} /> <br/>
      <CategryButton id="specialDessertMenu" onClick={handleOnClick} name={`המיוחדים שלנו`} ImageURL={`specialDesserts.jpg`} /><br/>
      <CategryButton id="milkshakeMenu" onClick={handleOnClick} name={`מילקשייק`} ImageURL={`milkshake.jpg`} /><br/>
      <CategryButton id="coffeeMenu" onClick={handleOnClick} name={`חם ללב`} ImageURL={`coffee.jpg`} /><br/>
      
    </div>
  );
};

export default HomePage;
