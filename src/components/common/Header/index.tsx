import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as _ from "./style";
import { BodyLarge2 } from "../../../styles/font";
import { Logo } from "../../../assets";
import SignIn from "../../pages/Main/Auth/signin";

import SigninModal from "../../pages/Main/Auth/signin";
import SignUp from "../../pages/Main/Auth/signup";
import { getCookie } from "../../../utils/cookie";

function Header() {
  const nav = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // 로그인 상태 관리
  const [role, setRole] = useState<"USER" | "PET_SITER">("USER");
  const [signupState, setSignupState] = useState<boolean>(false);
  const [signinState, setSigninState] = useState<boolean>(false);

  useEffect(() => {
    if (getCookie("access_token")) setIsLoggedIn(true);
  }, [signinState]);

  return (
    <_.Container>
      <img src={Logo} />
      {isLoggedIn ? (
        <>
          <BodyLarge2
            onClick={() => {
              nav("/pet/registration");
            }}
          >
            반려견 등록
          </BodyLarge2>
          <BodyLarge2
            onClick={() => {
              nav("/pet/employ");
            }}
          >
            펫시터 고용
          </BodyLarge2>
          <BodyLarge2>반려견 성향 테스트</BodyLarge2>
          <BodyLarge2>케어일지</BodyLarge2>
        </>
      ) : (
        <>
          <div>
            <BodyLarge2
              onClick={() => {
                setSigninState(true);
              }}
            >
              로그인
            </BodyLarge2>

            <BodyLarge2
              onClick={() => {
                setSignupState(true);
              }}
            >
              회원가입
            </BodyLarge2>
          </div>
        </>
      )}
      {signupState && (
        <SignUp
          signupModal={signupState}
          setSignupModal={setSignupState}
          role={role}
        />
      )}
      {signinState && (
        <SigninModal
          signinModal={signinState}
          setSigninModal={setSigninState}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
    </_.Container>
  );
}

export default Header;
