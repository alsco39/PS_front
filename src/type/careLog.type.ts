/* 케어일지 리스트 조회 */
export type CareLogListType = {
  id: number;
  title: string;
  create_date: string;
};

/** 케어일지 리스트 res 타입 */
export type CareLogListResType = {
  care_log_list: CareLogListType[];
};

// 케어일지 상세보기 res 타입
export type CareLogDetailResType = {
  id: number;
  create_date: string;
  title: string;
  content: string;
};

/** 케어일지 작성 req 타입 */
export type CreateCareLogReqType = {
  title: string;
  content: string;
};
