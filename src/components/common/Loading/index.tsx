import { loadingGif } from "../../../assets";
import * as _ from "./style";

function Loading() {
  return (
    <_.Container>
      <_.LoadingImg src={loadingGif} />
    </_.Container>
  );
}

export default Loading;
