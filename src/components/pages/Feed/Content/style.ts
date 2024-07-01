import styled from "styled-components";
import { Color } from "../../../../styles/color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  border: 10px;

  > div {
    display: flex;
    gap: 20px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${Color.gray[100]};
  padding-bottom: 10px;
  margin-bottom: 10px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-end;
    > div {
      display: flex;
      gap: 5px;
      > p {
        cursor: pointer;
        color: ${Color.gray[200]};
      }
    }
  }
`;

export const FeedContent = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${Color.gray[200]};
  p {
    margin: 5px 0;
  }
`;

export const ReportContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 2px;
  color: ${Color.gray[100]};
  cursor: pointer;
  > svg {
    width: 12px;
  }
`;

export const ReportButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  > p {
    color: ${Color.gray[200]};
  }
`;
