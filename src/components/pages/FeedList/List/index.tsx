// List.js
import * as _ from "./style";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { FeedListResType } from "../../../../type/feed.type";
import ArticleFeed from "../ArticleFeed";
import Error from "../../../common/Error";
import Loading from "../../../common/Loading";
import { GetFeedListApi, PostFeedApi } from "../../../../utils/apis/feed";
import { BodyLarge } from "../../../../styles/font";
import Header from "../../../common/Header";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { alertError, alertSuccess } from "../../../../utils/toastify";
import { useState } from "react";
import { CreateFeedReqType } from "../../../../type/feed.type";
import { Button } from "../../../../styles/button";

function List() {
  const { search } = useLocation();
  const nav = useNavigate();
  const [feedValue, setFeedValue] = useState<CreateFeedReqType>({
    title: "",
    note: "",
    money: 0,
    area: "",
    start_date: "2024-06-13",
    end_date: "2024-06-13",
  });

  const { data, isError, isLoading } = useQuery({
    queryKey: ["GetFeedListApi", search], // 쿼리 키 포함
    queryFn: GetFeedListApi,
    retry: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFeedValue({ ...feedValue, [name]: value });
  };

  const { mutate: writeFeed } = useMutation({
    mutationFn: PostFeedApi,
    onSuccess: () => {
      alertSuccess("게시글 작성이 완료되었습니다.");
      setFeedValue({
        title: "",
        note: "",
        money: 0,
        area: "",
        start_date: "2024-06-13",
        end_date: "2024-06-13",
      });
    },
    onError: () => {
      alertError("글을 작성할 수 없습니다.");
    },
  });

  const onClickWrite = () => {
    writeFeed(feedValue);
  };

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <Error />;
  } else {
    return (
      <>
        <Header />
        <_.Container>
          {data?.feed_list && data.feed_list.length ? (
            data.feed_list.map((v) => <ArticleFeed key={v.id} {...v} />)
          ) : (
            <BodyLarge>게시글이 존재하지 않습니다.</BodyLarge>
          )}
          <_.ButtonWrapper>
            <Button onClick={() => nav("/feeds/write")}>게시글 작성</Button>
          </_.ButtonWrapper>
        </_.Container>
      </>
    );
  }
}

export default List;
