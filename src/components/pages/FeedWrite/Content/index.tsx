// Write.js
import * as _ from "./style";
import { ChangeEvent, useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { CreateFeedReqType } from "../../../../type/feed.type";
import { PostFeedApi } from "../../../../utils/apis/feed";
import { alertError, alertSuccess } from "../../../../utils/toastify";
import Input from "../../../common/Input";
import TextArea from "../../../common/TextArea";
import { Button } from "../../../../styles/button";
import Header from "../../../common/Header";

function Write() {
  const [file, setFile] = useState<File>();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [feedValue, setFeedValue] = useState<CreateFeedReqType>({
    title: "",
    note: "",
    money: 0,
    area: "",
    start_date: "2024-06-13",
    end_date: "2024-06-13",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFeedValue({ ...feedValue, [name]: value });
  };

  const onClickSubmit = () => {
    feedWriteMutate(feedValue);
  };

  const { mutate: feedWriteMutate } = useMutation({
    mutationFn: (data: CreateFeedReqType) => PostFeedApi(data),
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
    onError: (err) => {
      alertError("게시글 작성에 실패하였습니다.");
    },
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <_.Container>
        <Input
          label="제목"
          placeholder=""
          value={feedValue.title}
          onChange={(e) =>
            setFeedValue({ ...feedValue, title: e.target.value })
          }
        />

        <TextArea
          height="400px"
          label="내용"
          placeholder=""
          value={feedValue.note}
          onChange={(e) => setFeedValue({ ...feedValue, note: e.target.value })}
        />

        <Input
          label="금액"
          placeholder=""
          type="number"
          value={feedValue.money}
          onChange={(e) =>
            setFeedValue({ ...feedValue, money: Number(e.target.value) })
          }
        />

        <Input
          label="시작일"
          placeholder=""
          type="date"
          value={feedValue.start_date}
          onChange={(e) =>
            setFeedValue({ ...feedValue, start_date: e.target.value })
          }
        />

        <Input
          label="종료일"
          placeholder=""
          type="date"
          value={feedValue.end_date}
          onChange={(e) =>
            setFeedValue({ ...feedValue, end_date: e.target.value })
          }
        />

        <Input
          label="지역"
          placeholder=""
          type="string"
          value={feedValue.area}
          onChange={(e) => setFeedValue({ ...feedValue, area: e.target.value })}
        />

        <div>
          <Button onClick={onClickSubmit}>작성 완료</Button>
        </div>
      </_.Container>
    </div>
  );
}

export default Write;
