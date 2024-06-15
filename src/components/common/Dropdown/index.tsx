import { BodyLarge } from "../../../styles/font";
import * as _ from "./style";

interface DropdownProps {
  label: string;
  item: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
function Dropdown({ label, item, value, onChange }: DropdownProps) {
  return (
    <_.Container>
      <_.Label>
        <BodyLarge>{label}</BodyLarge>
      </_.Label>
      <_.SelectBox value={value} onChange={onChange}>
        {item.map((v, i) => (
          <option>{v}</option>
        ))}
      </_.SelectBox>
    </_.Container>
  );
}

export default Dropdown;
