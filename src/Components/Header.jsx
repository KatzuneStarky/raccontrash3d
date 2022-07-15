import React, { useEffect } from 'react'
import '../Styles/Header.scss'

const Header = () => {

    return (
        <section className="header-container" data-scroll-container>
            <ul className="header-menu">
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Destacado</li>
            </ul>
            <h1 id='header-text'>Modelado 3D</h1>
        </section>
    )
}

export default Header