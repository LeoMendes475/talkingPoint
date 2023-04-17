import React, { useState } from "react";
import { Link } from 'react-router-dom'

import './navBar.css'


const styleNavBarFixed = {
    position: 'fixed',
    width: '229px',
    height: '100vh',
    background: '#FFFFFF',
    color: '#fff',
    border: '1px solid #D7D7D7',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start'
};

const styleIcon = {
    width: '153px', 
    height: '38.27px', 
    background: 'url(Component 1 (2))',
    margin: '40px 0 60px 32px',
}

const list = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 0 0 32px',
    margin: '0',
    gap: '0.5rem',
    listStyle: 'none'
}

const link = {
    marginBottom: '20px'
}

const listItem = {
    width: '140px',
    height: '23px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '22px',
    color: '#787486',
    textDecoration: 'none',
}

const listIcon = {
    fontSize: '20px',
}

const listItemOnFocus = { ...listItem, color: '#476EE6' };

export default function NavBar({position, width, height, background, color, border, display, flexDirection, alignItems}) {

        const styleNavBar = {
            position: position || 'fixed',
            width: width || '229px',
            height: height || '100vh',
            background: background || '#FFFFFF',
            color: color || '#fff',
            border: border || '1px solid #D7D7D7',
            display: display || 'flex',
            flexDirection: flexDirection || 'column',
            alignItems: alignItems || 'start'
        }
    
    return (
        <nav style={styleNavBar}>
            <Link to='/'>
                <img style={styleIcon} src="src/images/png/logo.png" alt="Logo" title="Logo"/>
            </Link>
            <ul style={list}>
                <li style={link}><Link to='/home' style={listItemOnFocus}><i className='bx bx-user' style={listIcon}></i> Conversar 1:1</Link></li>
                <li style={link}><Link to='/home' style={listItem}><i className='bx bx-list-ul' style={listIcon}></i> Exemplo</Link></li>
                <li style={link}><Link to='/home' style={listItem}><i className='bx bx-message-square-dots' style={listIcon}></i> Exemplo</Link></li>
                <li style={link}><Link to='/home' style={listItem}><i className='bx bx-cog' style={listIcon}></i> Exemplo</Link></li>
                <li style={link}><Link to='/login' style={listItem}><i className='bx bx-log-out' style={listIcon}></i> Login</Link></li>
            </ul>
        </nav>
    )
}