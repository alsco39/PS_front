import { AuthInstance, DefaultInstance } from ".";

const router = "/care";

// 케어 신청
export const PostApplyCareApi = async (feedId: number) => {
  await AuthInstance.post(`${router}/${feedId}`);
};
