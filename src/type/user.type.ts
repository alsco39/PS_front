/** 회원가입 req 타입 */
export type SignUpReqType = {
  name: string;
  phone: string;
  account_id: string;
  password: string;
};

/* 로그인 req 타입 */
export type SignInReqType = {
  account_id: string;
  password: string;
};

/* 로그인 res 타입 */
export type SignInResType = {
  access_token: string;
  expired_at: string;
  role: "USER" | "PET_SITER";
};
