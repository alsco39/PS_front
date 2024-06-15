import styled from "styled-components";
import { Color } from "../../../styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  color: ${Color.black};
  cursor: pointer;
`;

export const Input = styled.textarea<{ height?: string }>`
  resize: vertical;
  padding: 12px;
  border: 1px solid ${Color.gray[200]};
  border-radius: 8px;
  background-color: ${Color.white};

  height: ${({ height }) => height && height};

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  width: 100%;

  outline: none;
  cursor: pointer;
`;
