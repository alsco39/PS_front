import styled from "styled-components";
import { Color } from "../../../../../styles/color";

export const FileInput = styled.input`
  display: none;
`;

export const Container = styled.div`
  background-color: ${Color.gray[100]};
  justify-content: center;
  gap: 10px;
  flex: 1;
  align-items: center;
  width: 500px;

  > div {
  }
`;
