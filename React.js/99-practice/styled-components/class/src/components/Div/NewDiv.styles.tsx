import styled, { keyframes } from "styled-components";

const NewDiv = styled.div`
  background-color: #000000;
  color: #fff;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg)
    } to {
        transform: rotate(360deg)
    }
`;

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 2s linear;
`;

export default NewDiv;
