/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../assets/logo.png'
import user from '../../assets/user.webp'
import './Style.css'

const Header = () =>{
    return(
        <div className= 'Header'>
            <div className='wrapper-left'>
                <a href='/'>
                    <img src={logo} alt='netflix logo' className='img-logo'/>
                </a>

                <ul className='links-container'>
                    <li className='link-home'>Home</li>
                    <li className='link'>TV Shows</li>
                    <li className='link'>Movies</li>
                    <li className='link'>Recently Added</li>
                    <li className='link'>My List</li>
                </ul>
            </div>

            <a href='/user'>
                <img src={user} alt='user logo' className='user-logo'/>
            </a>
        </div>
    )
}

export default Header;