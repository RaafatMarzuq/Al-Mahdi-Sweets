import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route ,Routes, } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import {specialDessertMenu,milkshakeMenu,coffeeMenu,dessertsMenu} from "./components/MenuItem" ;
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/CoffeePage/MenuPage";


function App() {
  

  return (
    
    <BrowserRouter basename={process.env.PUBLIC_URL }>
    <Header />
          <Routes>
              <Route  path='/'  element={<HomePage/>}  />
              <Route   path='/dessertsMenu'  element={<MenuPage MenuName={"קינוח מפנק"} MenuItems={dessertsMenu} />}  />
              <Route  path='/milkshakeMenu'  element={<MenuPage MenuName={"מילקשייק"} MenuItems={milkshakeMenu} />}  />  
              <Route  path='/coffeeMenu'  element={<MenuPage MenuName={"חם ללב"} MenuItems={coffeeMenu} />}  />   
              <Route  path='/specialDessertMenu'  element={<MenuPage MenuName={"המיוחדים שלנו"} MenuItems={specialDessertMenu} />}  />   
          </Routes>
    <Footer/>
      </BrowserRouter> 
      
    
    
  );
}

export default App;
