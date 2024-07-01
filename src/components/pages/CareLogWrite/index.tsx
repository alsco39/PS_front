import * as _ from "./style";
import { ChangeEvent, useRef, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { CreateCareLogReqType } from "../../../type/careLog.type";
import { useMutation } from "@tanstack/react-query";
import { PostCareLogApi } from "../../../utils/apis/careLog";
import { alertError, alertSuccess } from "../../../utils/toastify";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { Button } from "../../../styles/button";
import Header from "../../common/Header";

function Write() {
  const [file, setFile] = useState<File>();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [careLogValue, setCareLogValue] = useState<CreateCareLogReqType>({
    title: "",
    content: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCareLogValue({ ...careLogValue, [name]: value });
  };

  const onClickSubmit = () => {
    careLogWriteMutate(careLogValue);
  };

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <_.Container>
        <Input
          label="제목"
          placeholder=""
          value={careLogValue.title}
          onChange={(e) =>
            setCareLogValue({ ...careLogValue, title: e.target.value })
          }
        />
        <TextArea
          height="400px"
          label="내용"
          placeholder=""
          value={careLogValue.content}
          onChange={(e) =>
            setCareLogValue({ ...careLogValue, content: e.target.value })
          }
        />

        <div>
          <Button onClick={onClickSubmit}>작성 완료</Button>
        </div>
      </_.Container>
    </div>
  );
}

export default Write;
