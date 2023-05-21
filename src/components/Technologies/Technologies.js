import React from "react";
import {
  TechnologiesContainer,
  TechnologiesHeader,
  TechnologiesIcons,
  TechnologyIcon,
} from "../styles/Technologies.styled";
import { iconsData } from "./icons";
import './Technologies.css';

const Technologies = () => {
  return (
    <TechnologiesContainer id="technologies">
      <TechnologiesHeader>Technologies I am familiar with:</TechnologiesHeader>

      <TechnologiesIcons>
        {iconsData.map((iconData) => {
          return (
            <div className="zoom-in-effect">
            <TechnologyIcon
              key={iconData.id}
              src={iconData.icon}
              alt={iconData.name}
              title={iconData.name}
              {...iconData}
            />
            </div>
          );
        })}
      </TechnologiesIcons>
    </TechnologiesContainer>
  );
};

export default Technologies;
