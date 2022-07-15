import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import menuList from "../Utils/Data/MenuData";
import '../Styles/Menu.scss'

const Menu = () => {
    const [selected, setSelected] = useState(0);
    return (
        <header>
            <div className="wrapper">
                <div className="logo">Raccon Trash 3D</div>
                <div className="hamburguer">
                    <GiHamburgerMenu />
                </div>
            </div>
            <main className="main">
                <div className="main-inner">
                    <h1></h1>
                    <p></p>
                </div>
                <div className="shadow one"></div>
                <div className="shadow two"></div>
            </main>
            <nav className="nav-bar">
                {menuList.map((val, index) => {
                    return (
                        <li
                            key={index}
                            onClick={() => setSelected(index)}
                            className={`${index === selected ? "active" : ""}`}
                        >
                            <Link to={"/"}>{val.name}</Link>
                        </li>
                    );
                })}
            </nav>
        </header>
    )
}

export default Menu