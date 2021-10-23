import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <h3>Just Header</h3>

            <div className="header__left">
                <img src="" alt="" />
            </div>

            <div className="header__search">
                {/*SearchIcon*/}
                <input type="text"/>
            </div>

            <div className="header__right">
                
            </div>


        </div>
    )
}

export default Header
