import styled from "styled-components";
import { Color } from "../../../styles/color";

export const Logo = styled.img`
  width: 44px;
`;

export const Container = styled.div`
  display: flex;
  width: 100vw;
  background-size: cover;
  background-position: bottom;
  background-color: ${Color.white};
  padding: 10px 100px;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    gap: 70px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10vw;
  width: 100vw;
  background-color: white;
  > div {
    display: flex;
    gap: 50px;
    align-items: center;
  }
`;
