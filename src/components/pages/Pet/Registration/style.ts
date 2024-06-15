import styled from "styled-components";
import { Color } from "../../../../styles/color";
import { Body } from "../../../../styles/font";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  background-color: ${Color.gray[100]};
  gap: 2rem;
  flex: 1;
  align-items: center;
  > div {
    display: flex;
    gap: 30px;
  }
`;

export const Explain = styled.div`
  display: flex;
  > p:last-child {
    color: ${Color.gray[100]};
  }
`;

export const SubmitContainer = styled.button`
  width: 270px;
  padding: 80px;
  border-radius: 20px;
  background-color: ${Color.white};

  border: 1px solid ${Color.gray[200]};
  display: flex;
  gap: 10px;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  > p {
    color: ${Color.black};
  }
  &:hover {
    filter: brightness(1.05);
  }
  &:active {
    filter: brightness(1);
  }
`;
export const PlusButton = styled.div`
  background-color: ${Color.white};
  border-radius: 50%;
  width: fit-content;
  height: fit-content;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    width: 15px;
    height: 15px;
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const SmallExplain = styled(Body)`
  align-self: flex-end;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;

  > div {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`;
