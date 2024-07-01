/** 게시글 작성 req 타입 */
export type CreateFeedReqType = {
  title: string;
  note: string;
  money: number;
  area: string;
  start_date: string;
  end_date: string;
};

/* 커뮤니티 리스트 목록 타입 */
export type FeedListType = {
  id: number;
  title: string;
  name: string;
  create_date: string;
};

/** 커뮤니티 res 타입 */
export type FeedListResType = {
  feed_list: FeedListType[];
};

// 커뮤니티 상세보기 res 타입
export type FeedDetailResType = {
  id: number;
  create_date: Date;
  name: string;
  title: string;
  note: string;
  money: number;
  area: string;
  start_date: Date;
  end_date: Date;
};
