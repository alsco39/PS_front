import * as S from "./style";
import { BodyLarge, Title, TitleLarge } from "../../styles/font";

export const Landing = () => {
  //ts

  return (
    <S.Contianer>
      <div>
        <p>로그인</p>
        <p>반려동물 등록하기</p>
        <p>펫시터 등록하기</p>
      </div>

      <div>
        <div>
          <h2>
            반려동물 케어가
            <br />
            필요하시다면
          </h2>
          <p>반려동물 케어를 위한 펫시터 매칭 서비스</p>
        </div>
        <a>펫시터 매칭</a>
      </div>
    </S.Contianer>
  );
};
