import {
  CreateCareLogReqType,
  CareLogListResType,
  CareLogDetailResType,
} from "../../type/careLog.type";
import { AuthInstance, DefaultInstance } from ".";

const router = "/carelog";

/* 케어글 작성 */
export const PostCareLogApi = async (feedData: CreateCareLogReqType) => {
  await AuthInstance.post(`${router}/create`, feedData);
};

/* 작성한 케어글 리스트 조회 */
export const GetCareLogListApi = async (): Promise<CareLogListResType> => {
  const { data } = await AuthInstance.get(`${router}/list`);
  return data;
};

/* 케어글 상세보기 */
export const GetCareLogDetailApi = async (
  careLogId: number
): Promise<CareLogDetailResType> => {
  const { data }: { data: CareLogDetailResType } = await AuthInstance.get(
    `${router}/${careLogId}`
  );

  return data;
};

/** 게시글 삭제 */
export const DeleteCareLogApi = async (careLogId: string) => {
  await AuthInstance.delete(`${router}/${careLogId}`);
};
