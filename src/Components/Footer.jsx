import React from 'react'
import SectionHeader from '../Components/SectionHeader'
import '../Styles/Footer.scss'

const Footer = () => {
    return (
        <section className="footer" data-scroll-container>
            <SectionHeader title={"Hecho por"} />
            <h1 className="location" id="location-text">La Paz, BCS</h1>
        </section>
    )
}

export default Footer