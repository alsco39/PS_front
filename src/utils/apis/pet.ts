import { PetRegistrationReqType } from "../../type/pet.type";
import { AuthInstance, DefaultInstance } from ".";

const router = "/pets";

/* 반려동물 등록 회원가입 */
export const PostPetRegistrationApi = async (
  userData: PetRegistrationReqType
) => {
  await AuthInstance.post(`${router}/create`, userData);
};
