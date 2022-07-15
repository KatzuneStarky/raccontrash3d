import React from 'react'
import '../Styles/SectionHeader.scss'

export default function SectionHeader ({ title }) {
    return (
        <h6 className="section-header">{title}</h6>
    )
}
