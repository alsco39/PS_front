import { ImageLogo } from "../../../../assets";
import * as _ from "./style";
import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useRef, useState } from "react";
import { PostImageApi } from "../../../../utils/apis/image";
import { alertError, alertSuccess } from "../../../../utils/toastify";
import { useImageUpload } from "../../../../hooks/useUploadImage";
import { BodyStrong } from "../../../../styles/font";
import { Button } from "../../../../styles/button";
import Input from "../../../common/Input";
import { PetRegistrationReqType } from "../../../../type/pet.type";
import Dropdown from "../../../common/Dropdown";
import { PostPetRegistrationApi } from "../../../../utils/apis/pet";

function PetRegistration() {
  const [file, setFile] = useState<File>();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [registrationValue, setRegistrationValue] =
    useState<PetRegistrationReqType>({
      name: "",
      gender: "수컷",
      tendency: "WTIL",
      age: 0,
      profile: "",
    });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegistrationValue({ ...registrationValue, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const { mutate: imageSubmitMutate } = useMutation({
    mutationFn: PostImageApi,
    onSuccess: () => {
      alertSuccess("사진 업로드에 성공하였습니다.");
    },
    onError: () => {
      alertError("오류가 발생했습니다.");
    },
  });

  const { uploadImage } = useImageUpload((profile: any) => {
    if (profile) {
      petRegistrationMutate({
        ...registrationValue,
        profile: profile,
      });
    }
  });

  const { mutate: petRegistrationMutate } = useMutation({
    mutationFn: (data: PetRegistrationReqType) => PostPetRegistrationApi(data),
    onSuccess: () => {
      alertSuccess("반려동물 등록이 완료되었습니다.");
      setRegistrationValue({
        name: "",
        gender: "수컷",
        tendency: "WTIL",
        age: 0,
        profile: "",
      });
    },
    onError: (err) => {
      alertError("반려동물 등록에 실패하였습니다.");
    },
  });

  const onClickPetRegistration = () => {
    petRegistrationMutate(registrationValue);
  };

  const SubmitFile = () => {
    if (!file) {
      alertError("사진을 업로드 해주세요.");
    } else {
      uploadImage(file);
    }
  };

  return (
    <_.Container>
      <div>
        <_.SubmitContainer onClick={() => imageInputRef.current?.click()}>
          <_.PlusButton>
            <img src={ImageLogo} />
          </_.PlusButton>
          <BodyStrong>{file ? file?.name : ""}</BodyStrong>
        </_.SubmitContainer>
        <_.FileInput
          ref={imageInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

        <div>
          <_.InputContainer>
            <Input
              label="반려동물 이름"
              placeholder=""
              onChange={onChange}
              value={registrationValue.name}
              name="name"
            />
            <div>
              <Dropdown
                label="성별"
                item={["수컷", "암컷"]}
                value={registrationValue.gender}
                onChange={(e) => {
                  setRegistrationValue({
                    ...registrationValue,
                    gender: e.target.value,
                  });
                }}
              />
              <Dropdown
                label="성향"
                item={[
                  "WTIL",
                  "WTIA",
                  "WNIA",
                  "WNIL",
                  "WTEL",
                  "WTEA",
                  "WNEA",
                  "WNEL",
                  "CTEL",
                  "CTEA",
                  "CNEA",
                  "CNEL",
                  "CTIA",
                  "CTIL",
                  "CNIA",
                  "CNIL",
                ]}
                value={registrationValue.tendency}
                onChange={(e) => {
                  setRegistrationValue({
                    ...registrationValue,
                    tendency: e.target.value,
                  });
                }}
              />
            </div>

            <Input
              label="나이"
              placeholder=""
              onChange={onChange}
              value={registrationValue.age}
              name="age"
            />
          </_.InputContainer>
        </div>
      </div>

      <Button onClick={SubmitFile}>업로드</Button>
      <Button onClick={onClickPetRegistration}>반려동물 등록</Button>
    </_.Container>
  );
}

export default PetRegistration;
