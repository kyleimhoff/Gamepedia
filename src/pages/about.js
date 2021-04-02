import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";

function About() {
    return(
        <AboutUS>
            <h1>About Us</h1>
            <p>This is my React/ Redux final project for Flatiron School. This is built with a Rails api as well as the RAWG.io api.</p>
            <p>Thanks for checking my site out.</p>
        </AboutUS>
    )
}


const AboutUS = styled(motion.div)`
diplay: flex;
align-items: center;
justify-content: space-around;
text-align: center;
`;

export default About;