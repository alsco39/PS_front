import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { SignInReqType } from "../../../../type/user.type";
import { PostSignInApi } from "../../../../utils/apis/users";
import { alertError, alertSuccess } from "../../../../utils/toastify";
import { setCookie } from "../../../../utils/cookie";
import { useNavigate } from "react-router-dom";
import { SubTitle } from "../../../../styles/font";
import * as _ from "./style";
import Modal from "../../../common/Modal";
import Input from "../../../common/Input";
import { Button } from "../../../../styles/button";

interface SignInProps {
  signinModal: boolean;
  setSigninModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>; // 추가된 부분
}

function SignIn({ signinModal, setSigninModal, setIsLoggedIn }: SignInProps) {
  const nav = useNavigate();

  const [signinValue, setSigninValue] = useState<SignInReqType>({
    account_id: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSigninValue({ ...signinValue, [name]: value });
  };

  const { mutate: signinMutate } = useMutation({
    mutationFn: PostSignInApi,
    onSuccess: (data) => {
      // alertSuccess("로그인에 성공하였습니다.");
      setCookie("access_token", data.access_token, new Date(data.expired_at));
      localStorage.setItem("ROLE", data.role);
      setIsLoggedIn(true);
      setSigninModal(false);
    },
    onError: () => {
      alertError("아이디와 비밀번호를 확인해주세요.");
      // setCookie("access_token", "ㅁㄴㅇㄹㅁㄴㅇ", new Date("2025.04.23 23:12"));
    },
  });

  const onClickSignup = () => {
    signinMutate(signinValue);
  };

  return (
    <>
      {signinModal && (
        <Modal isOpen={signinModal} setModal={setSigninModal}>
          <_.InputContainer>
            <div>
              <SubTitle>로그인</SubTitle>
            </div>

            <Input
              placeholder="아이디"
              onChange={onChange}
              value={signinValue.account_id}
              name="account_id"
            />

            <Input
              placeholder="비밀번호"
              onChange={onChange}
              value={signinValue.password}
              name="password"
            />
          </_.InputContainer>
          <Button onClick={onClickSignup}>로그인</Button>
        </Modal>
      )}
    </>
  );
}

export default SignIn;
