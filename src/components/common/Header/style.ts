import styled from "styled-components";
import { Color } from "../../../styles/color";

export const Logo = styled.img`
  width: 44px;
`;

export const Container = styled.div`
  display: flex;
  /* position: fixed; */
  top: 0;
  width: 100vw;
  background-size: cover;
  background-position: bottom;
  background-color: ${Color.white};
  padding: 10px 100px;
  justify-content: space-between;
  align-items: center;
  z-index: 1000; /* 다른 요소들 위에 나타나도록 설정 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 헤더에 그림자 추가 (선택사항) */
  > div {
    display: flex;
    gap: 70px;
  }
`;

export const PageContent = styled.div`
  padding-top: 80px; /* 헤더의 높이만큼 여백 추가 */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
