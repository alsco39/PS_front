import styled from "styled-components";
import { Color } from "../../../../styles/color";

export const Container = styled.div`
  gap: 40px 14px;
  width: 100%;
  min-height: 100vh; /* 최소 높이를 화면 전체로 설정 */
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 0px; /* padding으로 변경 */
  align-items: center;
  background-color: inherit; /* 상위 배경색을 상속받도록 설정 */
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
