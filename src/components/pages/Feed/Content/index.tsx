import * as _ from "./style";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { Body, Body2, TitleLarge } from "../../../../styles/font";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import {
  GetFeedDetailApi,
  DeleteFeedApi,
  PostFeedApi,
} from "../../../../utils/apis/feed";
import { alertError, alertSuccess } from "../../../../utils/toastify";
import { PostApplyCareApi } from "../../../../utils/apis/care";
import { Button } from "../../../../styles/button";

export function Content() {
  const { pathname } = useLocation();
  const id = pathname.split("/")[3];
  const nav = useNavigate();

  const {
    isLoading,
    data: feed,
    isError,
  } = useQuery({
    queryKey: ["getFeed", id],
    queryFn: () => GetFeedDetailApi(Number(id)),
    retry: 0,
    refetchOnWindowFocus: false,
  });

  const { mutate: deleteFeed } = useMutation({
    mutationFn: DeleteFeedApi,
    onSuccess: () => {
      alertSuccess("게시글이 삭제되었습니다.");
      nav("/feeds/list");
    },
    onError: () => {
      alertError("삭제에 실패하였습니다. 관리자에게 문의해주세요.");
    },
  });

  const { mutate: applyCare } = useMutation({
    mutationFn: PostApplyCareApi,
    onSuccess: () => {
      alertSuccess("펫시터 지원이 완료되었습니다.");
      nav("/feeds/list");
    },
    onError: () => {
      alertError("펫시터 지원에 실패하였습니다. 관리자에게 문의해주세요.");
    },
  });

  const onDelete = () => {
    deleteFeed(id);
  };

  const onApplyCare = () => {
    applyCare(Number(id));
  };

  const formatDate = (date: Date | string): string => {
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <Error />;
  }

  return (
    <_.Container>
      {feed && (
        <>
          <_.TitleContainer>
            <TitleLarge>{feed.title}</TitleLarge>
            <Body2>{formatDate(feed.create_date)}</Body2>
          </_.TitleContainer>
          <div>{feed.note}</div>
          <div>{feed.area}</div>
          <div>{formatDate(feed.start_date)}</div>
          <div>{formatDate(feed.end_date)}</div>
          <div>{feed.money}</div>
          <div>{feed.name}</div>

          <div>
            <Button onClick={onDelete}>삭제</Button>
            <Button onClick={onApplyCare}>펫시터 지원하기</Button>
          </div>
        </>
      )}
    </_.Container>
  );
}

export default Content;
