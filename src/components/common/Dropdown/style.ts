import styled from "styled-components";
import { Color } from "../../../styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  color: black;
  cursor: pointer;
`;

export const SelectBox = styled.select`
  padding: 12px;
  border: 1px solid ${Color.gray[200]};
  border-radius: 15px;
  background-color: white;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  outline: none;
  cursor: pointer;
`;
