import { FC } from "react";
import styled, {keyframes} from "styled-components";

interface StyledButtonProps {
  variant?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: 2px solid #514caf;
  background-color: ${(props) =>
    props.variant === "outline" ? "#FFF" : "#514caf"};
  color: ${(props) => (props.variant === "outline" ? "#514caf" : "#FFF")};
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#FFF" : "#514caf"};
    color: ${(props) => (props.variant !== "outline" ? "#514caf" : "#FFF")};
  };
`;

export const FancyButton = styled(StyledButton)<StyledButtonProps>`
  background-image: linear-gradient(to right, #65abf6 0%, #514caf 100%);
  border: none;
`;
export const DarkButton = styled(StyledButton)<StyledButtonProps>`
  border: 2px solid ${props => props.theme.dark.primary};
  background-color:${props => props.theme.dark.primary};
  color: ${props => props.theme.dark.text}
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  box-shadow: 10px 10px 5px 0px rgba(199,196,196,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(199,196,196,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(199,196,196,0.75);
  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "#514caf"};
    transform: translate(4px);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  } to {
    transform: rotate(360deg)
  }
`

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`