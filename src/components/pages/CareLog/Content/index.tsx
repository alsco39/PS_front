import * as _ from "./style";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { Body2, BodyLarge2, TitleLarge } from "../../../../styles/font";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import { alertError, alertSuccess } from "../../../../utils/toastify";
import {
  GetCareLogListApi,
  GetCareLogDetailApi,
  DeleteCareLogApi,
  PostCareLogApi,
} from "../../../../utils/apis/careLog";
import { Button } from "../../../../styles/button";
import { CreateCareLogReqType } from "../../../../type/careLog.type";
import { useState } from "react";
import Header from "../../../common/Header";

function CareLogContent() {
  const { pathname } = useLocation();
  const id = pathname.split("/")[3];
  const nav = useNavigate();
  const [careLogValue, setCareLogValue] = useState<CreateCareLogReqType>({
    title: "",
    content: "",
  });

  const {
    isLoading,
    data: feed,
    isError,
  } = useQuery({
    queryKey: ["getCareLog", id],
    queryFn: () => GetCareLogDetailApi(Number(id)),
    retry: 0,
    refetchOnWindowFocus: false,
  });

  const { mutate: deleteCareLog } = useMutation({
    mutationFn: DeleteCareLogApi,
    onSuccess: () => {
      alertSuccess("게시글이 삭제되었습니다.");
      nav("/carelog/list");
    },
    onError: () => {
      alertError("삭제에 실패하였습니다. 관리자에게 문의해주세요.");
    },
  });

  const { mutate: careLogWriteMutate } = useMutation({
    mutationFn: (data: CreateCareLogReqType) => PostCareLogApi(data),
    onSuccess: () => {
      alertSuccess("케어일지 작성이 완료되었습니다.");
      setCareLogValue({
        title: "",
        content: "",
      });
    },
    onError: (err) => {
      alertError("케어일지 작성에 실패하였습니다.");
    },
  });

  const onDelete = () => {
    deleteCareLog(id);
  };

  const onClickSubmit = () => {
    careLogWriteMutate(careLogValue);
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
            <Body2>{feed.create_date}</Body2>
          </_.TitleContainer>
          <div>{feed.content}</div>

          <div>
            <Button onClick={onDelete}>삭제</Button>
          </div>
        </>
      )}
    </_.Container>
  );
}

export default CareLogContent;
