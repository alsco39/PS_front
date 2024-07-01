import * as _ from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { FeedListType } from "../../../../type/feed.type";
import { BodyLarge2, Body2 } from "../../../../styles/font";

function ArticleFeed({ id, title, name, create_date }: FeedListType) {
  const nav = useNavigate();
  const { pathname } = useLocation();

  return (
    <_.Container onClick={() => nav(`${pathname}/${id}`)}>
      <div>
        <BodyLarge2>{title}</BodyLarge2>
        <Body2>- {name}</Body2>
      </div>
      <Body2>{create_date}</Body2>
    </_.Container>
  );
}

export default ArticleFeed;
