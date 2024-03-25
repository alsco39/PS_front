import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Landing } from "../../assets";

export const Contianer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url(${Landing});
  background-size: cover;
  background-position: bottom;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 10vw;
  width: 100vw;
  > div {
    display: flex;
    gap: 28px;
    align-items: center;
  }
`;

export const MainContianer = styled.div`
  display: flex;
  width: 50vw;
`;
