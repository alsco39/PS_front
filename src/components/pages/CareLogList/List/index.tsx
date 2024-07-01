import * as _ from "./style";
import { useQuery } from "@tanstack/react-query";
import ArticalCareLog from "../ArticalCareLog";
import { useSearchParams } from "react-router-dom";
import { BodyLarge2 } from "../../../../styles/font";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import { GetCareLogListApi } from "../../../../utils/apis/careLog";
import { Button } from "../../../../styles/button";
import { useNavigate } from "react-router-dom";
import Header from "../../../common/Header";

function List() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const nav = useNavigate();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["GetCareLogListApi"],
    queryFn: () => GetCareLogListApi(),
    retry: 0,
    select: (data) => data.care_log_list,
  });

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <Error />;
  }
  return (
    <>
      <Header />
      <_.Container>
        {data && data.length ? (
          data.map((v) => <ArticalCareLog key={v.id} {...v} />)
        ) : (
          <BodyLarge2>작성한 케어일지가 없습니다.</BodyLarge2>
        )}

        <Button onClick={() => nav("/carelog/write")}>케어일지 작성</Button>
      </_.Container>
    </>
  );
}

export default List;
