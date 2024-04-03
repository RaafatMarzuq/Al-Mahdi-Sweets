import React ,{useEffect,useState} from 'react';
import CategryButton from '../../components/CatigoryButton/CategryButton';
import './style.css'; 
import {useNavigate} from "react-router-dom"

const HomePage = () => {
  const [toPage,setToPage] = useState("")
  let navigate = useNavigate();
    useEffect(()=> {
     toPage ==="Home"? navigate(`/`):navigate(`/${toPage}`) 
    },[toPage,navigate])
    function handleOnClick(page){
      setToPage(page)
      
    }

    return (
    <div className="container">
      <CategryButton id="dessertsMenu" onClick={handleOnClick} name={`קינוח מפנק`} ImageURL={`desserts.jpg`} />
      <CategryButton id="specialDessertMenu" onClick={handleOnClick} name={`המיוחדים שלנו`} ImageURL={`specialDesserts.jpg`} />
      <CategryButton id="milkshakeMenu" onClick={handleOnClick} name={`מילקשייק`} ImageURL={`milkshake.jpg`} />
      <CategryButton id="coffeeMenu" onClick={handleOnClick} name={`חם ללב`} ImageURL={`coffee.jpg`} />
      
    </div>
  );
};

export default HomePage;
