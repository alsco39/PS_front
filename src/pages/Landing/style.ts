import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Landing } from "../../assets";

export const Contianer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Landing});
  background-size: cover;
  background-position: bottom;
`;
