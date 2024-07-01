import styled from "styled-components";
import { Color } from "../../../../styles/color";

export const Container = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  gap: 4px;
  width: 100%;
  cursor: pointer;
  border: 1px solid ${Color.black};
  padding: 5px;
  border-radius: 5px;
  width: 50vw;
  margin: 0 auto;
  > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
