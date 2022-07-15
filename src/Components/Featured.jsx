import React, { useState } from 'react'
import '../Styles/Featured.scss'

const Featured = () => { 

    return (
        <section className="featured-section">
            <div className="featured-row-layout">
                <h6>3d Modeling</h6>
                <img src={"https://cdn1.epicgames.com/epic/offer/Flower_Epic_PDPpromo_portrait-1288x1450-c0fb6d93a8d729d60dcee1af234e4888.jpg"} alt="" />
            </div>
            <div className="featured-column-layout">
                <h6>3d Rigging</h6>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg/1126px-Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg"} alt="" />
            </div>
        </section>
    )
}

export default Featured