import styled from "styled-components";
import { Color } from "../../../../styles/color";

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   width: 500px;
//   margin: 0 auto;
//   padding-top: 30px; /* 헤더와 겹치지 않도록 여백 추가 */
// `;

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
