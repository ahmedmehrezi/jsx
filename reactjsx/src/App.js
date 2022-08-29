import logo from './logo.svg';
import './App.css';
import React from 'react';
import Namepr from "./Component/Profile/Name.js";
import Addresspr from "./Component/Profile/Address.js";
import Imgpr from "./Component/Profile/ProfilePhoto.js";

function App() {
  return (
    <div className="App">
      <div className='block'>
        <div className='bl'>
          <div className='imgblock'> <Imgpr/> </div>
          <div className='name'>
            <h3>Name :</h3>
            <p> <Namepr/> </p>
          </div>
          <div className='stars'>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          </div>
        </div>
        <div className='address'>
          <h3>Address :</h3>
          <p><Addresspr/></p>
        </div>

      </div>
    </div>
  );
}

export default App;
