import { useMutation } from "@tanstack/react-query";
import { PostImageApi } from "../utils/apis/image";
import { alertError } from "../utils/toastify";

export const useImageUpload = (onUploadSuccess: any) => {
  const { mutate, data } = useMutation({
    mutationFn: PostImageApi,
    onSuccess: (res) => {
      onUploadSuccess(res.image);
    },
    onError: (err) => {
      alertError("파일 업로드에 실패하였습니다.");
    },
  });

  const uploadImage = (image: File) => {
    const formData = new FormData();
    formData.append("image", image);
    mutate(formData);
  };

  return { uploadImage, imageUrl: data?.image };
};
