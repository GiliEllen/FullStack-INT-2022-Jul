import { styled } from "styled-components";

const primaryPurple = "#7867ff";

interface StyleButtonProps {
  variant?: string;
}

const StyleButton = styled.button<StyleButtonProps>`
  border: 2px solid ${primaryPurple};
  background-color: ${(props) =>
    props.variant === "outline" ? primaryPurple : "#fff"};
  color: ${(props) => (props.variant === "outline" ? "#fff" : primaryPurple)};
  padding: 15px;
  transition: 0.5s all ease-out;
  display: inline-block;
  &:hover {
    background-color: ${(props) =>
      props.variant === "outline" ? "#fff" : primaryPurple};
    color: ${(props) => (props.variant === "outline" ? primaryPurple : "#fff")};
  }
`;

export const FancyButton = styled(StyleButton)<StyleButtonProps>`
  background-image: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    #7a0fa4 50%
  );
  border: none;
  color: #fff;
`;

export const SubmitButton = styled(StyleButton).attrs({
  type: "submit",
})`
  box-shadow: 10px 10px 5px 0px rgba(191, 191, 191, 0.75);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(191, 191, 191, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(191, 191, 191, 0.75);

  &:active {
    background-color: ${(props) =>
      props.variant === "outline" ? "#fff" : "#000"};
    transform: translate(4px);
  }
`;

export const DarkButton = styled(StyleButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;
export const PinkButton = styled(StyleButton)`
  border: 2px solid ${(props) => props.theme.pink.primary};
  background-color: ${(props) => props.theme.pink.primary};
  color: ${(props) => props.theme.pink.text};
`;

export default StyleButton;
