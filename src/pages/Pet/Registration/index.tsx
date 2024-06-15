import { useState } from "react";
import Header from "../../../components/common/Header";
import PetRegistration from "../../../components/pages/Pet/Registration";
import * as _ from "./style";

function Registration() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true); // 로그인 상태 관리

  return (
    <_.Container>
      <Header />
      <PetRegistration />
    </_.Container>
  );
}

export default Registration;
