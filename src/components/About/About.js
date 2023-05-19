import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            A passionate and driven front end developer based in India currently residing in UAE.I have a 2+ years of background in the It Industry working in both front end and backend. 
          </StyledParagraph>
          <StyledParagraph>
            I love to design and create responsive websites and web applications from
            scratch. I'm dedicated to creating websites that captivate and engage users with stunning UI designs and seamless functionality. 
            I have been continuously enriching my skills by learning other front-end technologies and frameworks.The technologies, tools and languages I am using to build
            my projects are HTML, CSS, JavaScript, REACT JS,Bootstrap,Git,GitHub and VS Code.
          </StyledParagraph>
          <StyledParagraph>
          Please feel free to connect with me to discuss potential collaborations or job opportunities.
          </StyledParagraph>
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-Rinu-Rahim"
            >
              Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
