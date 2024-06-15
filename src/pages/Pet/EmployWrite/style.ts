import styled from "styled-components";
import { Color } from "../../../styles/color";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: bottom;
  background-color: ${Color.gray[100]};
  flex-direction: column;
  align-items: center;
`;
