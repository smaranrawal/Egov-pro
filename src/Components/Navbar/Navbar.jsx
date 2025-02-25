import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assests/nepal_logo.png";
import { Link } from "react-router-dom";


const Navbar = () =>  {

    const [menu,setMenu]=useState("Home");

  return (
    <div className="navbar">
      <div className="Navbar-logo">
        <img src={logo} alt="logo" />
        <div className="logo-text">
        <span className="sajilo">Sajilo</span>
        <span className="nagarik-sewa">Nagarik Sewa</span>
        <span className="para">-Your gateway to government services</span>
        
        </div>
       
      </div>

      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Home")}} ><Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="Home"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("About Nepal")}} ><Link style={{textDecoration:'none'}} to='/About Nepal'>About Nepal</Link>{menu==="About Nepal"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Government")}}><Link style={{textDecoration:'none'}} to='/Government'>Government</Link>{menu==="Government"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Services")}}><Link style={{textDecoration:'none'}} to='/Services'>Services</Link>{menu==="Services"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Contact")}}><Link style={{textDecoration:'none'}} to='/Contact'>Contact</Link>{menu==="Contact"?<hr/>:<></>}</li> 
      </ul>

      <div className="nav-login">
        <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
