import {
  CreateFeedReqType,
  FeedListResType,
  FeedDetailResType,
} from "../../type/feed.type";
import { AuthInstance, DefaultInstance } from ".";

const router = "/feeds";

/* 게시글 작성 */
export const PostFeedApi = async (feedData: CreateFeedReqType) => {
  await AuthInstance.post(`${router}/create`, feedData);
};

/* 게시글 리스트 */
export const GetFeedListApi = async (): Promise<FeedListResType> => {
  const { data } = await AuthInstance.get(`${router}/list`);
  return data;
};

// 게시글 상세보기
export const GetFeedDetailApi = async (
  feedId: number
): Promise<FeedDetailResType> => {
  const { data }: { data: FeedDetailResType } = await AuthInstance.get(
    `${router}/${feedId}`
  );

  return data;
};

/** 게시글 삭제 */
export const DeleteFeedApi = async (feedId: string) => {
  await AuthInstance.delete(`${router}/${feedId}`);
};
