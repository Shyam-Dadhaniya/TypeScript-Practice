import React, { ReactElement } from "react";
import { Game } from "../../types";
import { Description, Details, Genre, Icon, Img, StyledLink, Title } from "./styles";
import windowsIcon from "../assets/icons/windows.svg";
import browserIcon from "../assets/icons/browser.svg";
import { BROWSER, WINDOWS } from "./constants";

interface Props {
  content: Game;
}

const GameCard = ({ content }: Props): ReactElement => {
  const { id, title, thumbnail, short_description, genre, platform } = content;
  const icons = platform.split(',').map(p => {
    let icon = null;
    switch (p.trim()) {
      case WINDOWS:
        icon = (
          <Icon key={`${id}-windows`} src={windowsIcon} alt='windows-icon' />
        )
        break;
      case BROWSER:
        icon = (
          <Icon key={`${id}-browser`} src={browserIcon} alt='browser-icon' />
        )
        break;
      default:
        break;
    }
    return icon;
  })
  const link = `/game/${id}`;
  return (
    <StyledLink to={link}>
      <Img alt={`${title} logo`} src={thumbnail} />
      <Details>
        <Title>{title}</Title>
        <Description>{short_description}</Description>
        <Genre>{genre}</Genre>
        <p>{icons}</p>
      </Details>
    </StyledLink>
  );
};

export default GameCard;
