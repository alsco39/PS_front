import { BodyLarge } from "../../../styles/font";
import * as _ from "./style";
import { TextAreaProps } from "./type";

function TextArea({
  label,
  placeholder,
  name,
  value,
  onChange,
  height,
}: TextAreaProps) {
  return (
    <_.Container>
      <_.Container>
        <_.Label>
          <BodyLarge>{label}</BodyLarge>
        </_.Label>
        <_.Input
          height={height}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          value={value}
        />
      </_.Container>
    </_.Container>
  );
}

export default TextArea;
