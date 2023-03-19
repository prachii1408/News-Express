import React, { useEffect } from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  
   
  return (
    <div className="nav">
    <input type="checkbox" id="check" />
    <label htmlFor="check" className='checkbtn'>
    <i className="fa-sharp  fa-solid fa-bars"></i>
    </label>
    <img src="newsexpress.png" alt="News logo" className='logo' />
    <ul>
        <li><Link to="/" >HOME</Link></li>
        <li><Link to="/sports">SPORTS</Link></li>
        <li><Link to="/science">SCIENCE</Link></li>
        <li><Link to="/environment">ENVIRONMENT</Link></li>
        <li><Link to="/technology">TECHNOLOGY</Link></li>
        <li><Link to="/entertainment">ENTERTAINMENT</Link></li>
    </ul>
    </div>
  )
}

export default Navbar;
