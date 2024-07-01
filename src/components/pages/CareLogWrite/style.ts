import styled from "styled-components";
import { Color } from "../../../styles/color";

export const FileInput = styled.input`
  display: none;
`;

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 500px;
  margin: 0 auto;
  padding-top: 30px; /* 헤더와 겹치지 않도록 여백 추가 */
`;
