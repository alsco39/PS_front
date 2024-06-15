import { useState } from "react";
import { Logo } from "../../../../assets";
import Input from "../../../common/Input";
import Modal from "../../../common/Modal";
import { Button } from "../../../../styles/button";
import * as _ from "./style";
import { useMutation } from "@tanstack/react-query";
import { SignUpReqType } from "../../../../type/user.type";
import {
  PostUserSignUpApi,
  PostPetSiterSignUpApi,
} from "../../../../utils/apis/users";
import { alertError, alertSuccess } from "../../../../utils/toastify";
import { SubTitle } from "../../../../styles/font";

const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,32}$/;
const numberRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;

interface SignUpProps {
  signupModal: boolean;
  setSignupModal: React.Dispatch<React.SetStateAction<boolean>>;
  role: "USER" | "PET_SITER";
}
function SignUp({ signupModal, setSignupModal, role }: SignUpProps) {
  const [signupValue, setSignupValue] = useState<SignUpReqType>({
    name: "",
    phone: "",
    account_id: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupValue({ ...signupValue, [name]: value });
  };

  const signUpApi = (role: "USER" | "PET_SITER", data: SignUpReqType) => {
    if (role === "USER") {
      return PostUserSignUpApi(data);
    } else {
      return PostPetSiterSignUpApi(data);
    }
  };

  const { mutate: signupMutate } = useMutation({
    mutationFn: (data: SignUpReqType) => signUpApi(role, data),
    onSuccess: () => {
      alertSuccess("회원가입에 성공하였습니다.");
      setSignupValue({
        name: "",
        phone: "",
        account_id: "",
        password: "",
      });
      setSignupModal(false);
    },
    onError: (err) => {
      alertError("회원가입에 실패하였습니다.");
    },
  });

  const onClickSignup = () => {
    signupMutate(signupValue);
  };

  return (
    <>
      {signupModal && (
        <Modal isOpen={signupModal} setModal={setSignupModal}>
          <_.InputContainer>
            <div>
              <SubTitle>회원가입</SubTitle>
            </div>
            <Input
              placeholder="이름"
              onChange={onChange}
              value={signupValue.name}
              name="name"
            />
            <Input
              placeholder="전화번호"
              onChange={onChange}
              value={signupValue.phone}
              name="phone"
            />
            <Input
              placeholder="아이디"
              onChange={onChange}
              value={signupValue.account_id}
              name="account_id"
            />
            <Input
              placeholder="비밀번호"
              onChange={onChange}
              value={signupValue.password}
              name="password"
            />
          </_.InputContainer>
          <Button onClick={onClickSignup}>회원가입</Button>
        </Modal>
      )}
    </>
  );
}

export default SignUp;
