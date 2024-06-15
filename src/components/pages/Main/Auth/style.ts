import styled from "styled-components";
import { Color } from "../../../../styles/color";

export const Container = styled.div``;

export const Logo = styled.img`
  width: 100px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    display: flex;
    justify-content: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  > div {
    display: flex;
    justify-content: end;
    > div {
      display: flex;
      align-items: center;
      gap: 5px;
      color: ${Color.primary[500]};
      > hr {
        width: 0px;
        height: 16px;
        border: 0.5px solid ${Color.primary[500]};
        background-color: red;
      }
      > p {
        cursor: pointer;
      }
    }
  }
`;
