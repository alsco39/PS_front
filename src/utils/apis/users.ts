import {
  SignUpReqType,
  SignInReqType,
  SignInResType,
} from "../../type/user.type";
import { AuthInstance, DefaultInstance } from ".";

const router = "/users";

/* 유저 회원가입 */
export const PostUserSignUpApi = async (userData: SignUpReqType) => {
  await DefaultInstance.post(`${router}/signup`, userData);
};

/* 펫시터 회원가입 */
export const PostPetSiterSignUpApi = async (petSitterData: SignUpReqType) => {
  await DefaultInstance.post(`${router}/pesitter/signup`, petSitterData);
};

/* 로그인 */
export const PostSignInApi = async (
  userData: SignInReqType
): Promise<SignInResType> => {
  const { data }: { data: SignInResType } = await DefaultInstance.post(
    `${router}/signin`,
    userData
  );
  return data;
};
