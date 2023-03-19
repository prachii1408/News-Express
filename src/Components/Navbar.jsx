import React, { useState } from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  const [state,setState]=useState(false);
  function togglebar(){
      setState(!state);
  }
   
  return (
    <div className="nav">
    <input type="checkbox" id="check" />
    <label htmlFor="check" className='checkbtn'>
    <i className="fa-sharp  fa-solid fa-bars" onClick={togglebar}></i>
    </label>
    <img src="newsexpress.png" alt="News logo" className='logo' />
    <ul style={{left:state?"-100%":"0"}}>
        <li><Link to="/" onClick={togglebar}>HOME</Link></li>
        <li><Link to="/sports" onClick={togglebar}>SPORTS</Link></li>
        <li><Link to="/science" onClick={togglebar}>SCIENCE</Link></li>
        <li><Link to="/environment" onClick={togglebar}>ENVIRONMENT</Link></li>
        <li><Link to="/technology" onClick={togglebar}>TECHNOLOGY</Link></li>
        <li><Link to="/entertainment" onClick={togglebar}>ENTERTAINMENT</Link></li>
    </ul>
    </div>
  )
}

export default Navbar;
