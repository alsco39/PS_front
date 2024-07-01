import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as _ from "./style";
import { BodyLarge2 } from "../../../styles/font";
import { Logo } from "../../../assets";
import SignIn from "../../pages/Main/Auth/signin";
import SigninModal from "../../pages/Main/Auth/signin";
import SignUp from "../../pages/Main/Auth/signup";
import { getCookie } from "../../../utils/cookie";
import { Link } from "react-router-dom";

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
      <img src={Logo} alt="Logo" />
      {isLoggedIn ? (
        <div>
          <BodyLarge2 onClick={() => nav("/pet/registration")}>
            반려견 등록
          </BodyLarge2>
          <BodyLarge2 onClick={() => nav("/feeds/list")}>
            펫시터 고용
          </BodyLarge2>
          <BodyLarge2>
            <Link to="https://www.fordong.co.kr/dbti?utm_campaign=u24fordong04&utm_source=google&utm_medium=network_performancemax_conversion_cpa&utm_content=dbti_demo&utm_term=non&gad_source=1&gclid=Cj0KCQjwvb-zBhCmARIsAAfUI2tTbjS9zttwqdeehGiGptnY91THn0og704ekcPjJMqTOIgnNPmpGhMaAhDkEALw_wcB">
              반려견 성향 테스트
            </Link>
          </BodyLarge2>
          <BodyLarge2 onClick={() => nav("/carelog/list")}>케어일지</BodyLarge2>
        </div>
      ) : (
        <div>
          <BodyLarge2 onClick={() => setSigninState(true)}>로그인</BodyLarge2>
          <BodyLarge2 onClick={() => setSignupState(true)}>회원가입</BodyLarge2>
        </div>
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
