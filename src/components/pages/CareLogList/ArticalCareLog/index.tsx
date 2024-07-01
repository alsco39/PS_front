import * as _ from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { CareLogListType } from "../../../../type/careLog.type";
import { Logo } from "../../../../assets";
import { BodyLarge, BodyLarge2 } from "../../../../styles/font";

function ArticalCareLog({ id, create_date, title }: CareLogListType) {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <_.Container onClick={() => nav(`${pathname}/${id}`)}>
      <div>{title}</div>
      <div>{create_date}</div>
    </_.Container>
  );
}

export default ArticalCareLog;
