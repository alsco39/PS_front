import * as _ from "./style";
import { ChangeEvent, useRef, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { PostFeedApi } from "../../../../../utils/apis/feed";
import { CreateFeedReqType } from "../../../../../type/feed.type";
import { useMutation } from "@tanstack/react-query";
import { alertError, alertSuccess } from "../../../../../utils/toastify";
import { useImageUpload } from "../../../../../hooks/useUploadImage";
import Input from "../../../../common/Input";
import TextArea from "../../../../common/TextArea";
import { Button } from "../../../../../styles/button";

function PetEmployWrite() {
  const [file, setFile] = useState<File>();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [feedValue, setFeedValue] = useState<CreateFeedReqType>({
    title: "",
    note: "",
    money: 0,
    area: "",
    startDate: "2024-06-13",
    endDate: "2024-06-13",
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
        startDate: "2024-06-13",
        endDate: "2024-06-13",
      });
    },
    onError: (err) => {
      alertError("게시글 작성에 실패하였습니다.");
    },
  });

  return (
    <_.Container>
      <Input
        label="제목"
        placeholder=""
        value={feedValue.title}
        onChange={(e) => setFeedValue({ ...feedValue, title: e.target.value })}
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
        value={feedValue.startDate}
        onChange={(e) =>
          setFeedValue({ ...feedValue, startDate: e.target.value })
        }
      />

      <Input
        label="종료일"
        placeholder=""
        type="date"
        value={feedValue.endDate}
        onChange={(e) =>
          setFeedValue({ ...feedValue, endDate: e.target.value })
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
  );
}

export default PetEmployWrite;
