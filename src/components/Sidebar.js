// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import About from './About';
// import "./Sidebar.css"

// function Sidebar() {
//     return (
//         <div className="sidebar">
//             <h1 className="heading">Lorem ipsum</h1>
//              <ul>
//             <li>
//               <NavLink to="/" style={{textDecoration: 'none',color: "grey"}}>About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" style={{textDecoration: 'none',color: "grey"}}>Services</NavLink>
//             </li>
//             <li>
//               <NavLink to="/service" style={{textDecoration: 'none',color: "grey"}}>Cuisine</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" style={{textDecoration: 'none',color: "grey"}}>Gallery</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" style={{textDecoration: 'none',color: "grey"}}>Contact</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" style={{textDecoration: 'none',color: "grey"}}>Book</NavLink>
//             </li>
//           </ul>
//           <button className="btn">Cart</button>
//         </div>
//     )
// }

// export default Sidebar
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import { navbar } from "./navbar";
// import "./Menubar.css";
// import CloseIcon from '@material-ui/icons/Close';
import "./Sidebar.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Sidebar() {
    const [sidebar, setsidebar] = useState(false);

    const showSidebar = () => setsidebar(!sidebar)
    return (
        <>
        <ShoppingCartIcon className="shopping"/>
        <div className="container">
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <MenuIcon onClick={showSidebar} />
                </Link>
            </div>
            
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            {/* <img className="img-logo" src="https://i.pinimg.com/736x/1f/e0/b9/1fe0b9bdec78c8e8447b68b2e3fbe6fc.jpg" alt="logo" /> */}
                            {/* <CloseIcon className="close-icon" /> */}
                        </Link>
                    </li>
                    <h1 className="heading">Lorem Ipsum</h1>
                    {navbar.map((item, index) => {
                        return (
                          
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {/* {item.icon} */}
                                    <span>{item.title}</span>
                                    
                                </Link>
                                
                            </li>
                            
                        )
                        
                    })}
                        <button className="btn">Cart</button>
                </ul>
                
            </nav>
            
            </div>
            
        </>

    )
}

export default Sidebar