import React from "react";
import SectionHeader from '../Components/SectionHeader'
import '../Styles/About.scss'

const About = () => {
    return (
        <section className="about-section">
            <SectionHeader title={"Acerca de"} />
            <p className="headline">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut dolorem
                delectus veniam doloribus, debitis animi voluptas nisi aspernatur eius
                sint vitae illum accusamus alias dolores deserunt culpa, totam minima
                quisquam!
            </p>
        </section>
    );
};

export default About;
