import React from "react";
import { StyledButton } from "../styles/Button.styled";
import TextChangingComponent from "./TextChangingComponent";
import {
  Name,
  StyledButtonsContainer,
  StyledHome,
  Title,
  Line,
  Social,
  Socials,
} from "../styles/Home.styled";
import "./style.css";
import { FaArrowCircleDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import { GrLinkedinOption } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name>Hey, I'm Rinu</Name>
        <Title>I design and build user interfaces</Title>
        <TextChangingComponent />
        <StyledButtonsContainer>
          <StyledButton
            secondary="true"
            content="B"
            to="about"
            smooth={true}
            duration={0}
            delay={0}
            spy={true}
            spyThrottle={0}
            exact="true"
            offset={-50}
          >
            <span>Learn more about me
            <FaArrowCircleDown style={{ fontSize:'2rem',paddingTop:'.5rem', paddingLeft:'.5rem'}} />
            </span>
          </StyledButton>
          
        </StyledButtonsContainer>
        <Line />
        <Socials>
          <Social
            href="mailto:rinurahim018@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </Social>
          <Social
            href="https://github.com/rrinu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMarkGithub />
          </Social>
          <Social
            href="www.linkedin.com/in/rinu-rahim"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption />
          </Social>
        </Socials>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
