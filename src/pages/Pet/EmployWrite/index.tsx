import { useState } from "react";
import Header from "../../../components/common/Header";
import * as _ from "./style";
import PetEmployWrite from "../../../components/pages/Feed/FeedWrite/Content";

function EmployWrite() {
  return (
    <_.Container>
      <Header />
      <PetEmployWrite />
    </_.Container>
  );
}

export default EmployWrite;
