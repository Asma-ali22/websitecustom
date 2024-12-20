import React from "react";
import Link from "next/link";
import "../../app/components/nav.css"
const Nav=()=>{
    return(
<nav className="navbar">
        <div className="logo">Coffee Shop</div>
        <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Menu</Link></li>
            <li><Link href="/">Contact</Link></li>
        </ul>
    </nav>
);
    
}
export default Nav