import { AttachmentResType } from "../../type/attachment.type";
import { AuthInstance } from ".";

const router = "/images";

/** 사진 등록 url */
export const PostImageApi = async (imgMultipart: FormData) => {
  const { data }: { data: AttachmentResType } = await AuthInstance.post(
    `${router}/upload`,
    imgMultipart
  );
  return data;
};
