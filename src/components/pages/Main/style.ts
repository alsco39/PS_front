import styled from "styled-components";
import { Color } from "../../../styles/color";

export const Logo = styled.img`
  width: 44px;
`;

export const Contianer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: bottom;
  background-color: ${Color.gray[100]};
  flex-direction: column;
  align-items: center;
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

export const MainContianer = styled.div`
  display: flex;
  width: 50vw;
  height: 55vh;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    gap: 80px;
    > div {
      display: flex;
      flex-direction: column;
      > p:nth-child(1) {
        font-weight: bold;
      }
    }
  }
`;
export const EnterButton = styled.button`
  border-radius: 18px;
  width: fit-content;
  padding: 10px 20px;
  background-color: ${Color.primary[300]};
  color: white;
  border: none;
  cursor: pointer;
`;
