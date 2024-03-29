import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    
  <nav className="nav">
    <Link to="/" className="site-title">OVO Club</Link>
    <ul>
        <CustomLink to="/"> Home </CustomLink>
        <CustomLink to="/discography"> Discography </CustomLink>
        <CustomLink to="/videos"> Videos </CustomLink>
        <CustomLink to="/login"> Login </CustomLink>
        <CustomLink to="/adminpanel"> CRUD Panel </CustomLink>
    </ul>
    <input id="searchbar" placeholder="Search"></input>
  </nav>
  )
}


function CustomLink( {to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch( {path: resolvedPath.pathname, end:true })
    
        return (
            <li className={isActive ? "active" : "" }>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
        
    }