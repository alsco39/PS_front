import * as _ from "./style";
import { BodyLarge, Title, TitleLarge, BodyLarge2 } from "../../../styles/font";
import { Logo, MainImage } from "../../../assets";
import Header from "../../common/Header";

export const Main = () => {
  return (
    <_.Contianer
      style={{
        backgroundImage: "url(" + MainImage + ")",
      }}
    >
      <Header />
      <_.MainContianer>
        <div>
          <div>
            <TitleLarge>
              반려동물 케어가
              <br />
              필요하시다면
            </TitleLarge>
            <Title>반려동물 케어를 위한 펫시터 매칭 서비스</Title>
          </div>
          <_.EnterButton>
            <BodyLarge>펫시터 매칭</BodyLarge>
          </_.EnterButton>
        </div>
      </_.MainContianer>
    </_.Contianer>
  );
};
