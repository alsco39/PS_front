import { CreateFeedReqType } from "../../type/feed.type";
import { AuthInstance, DefaultInstance } from ".";

const router = "/boards";

/* 게시글 작성 회원가입 */
export const PostFeedApi = async (feedData: CreateFeedReqType) => {
  await DefaultInstance.post(`${router}`, feedData);
};
