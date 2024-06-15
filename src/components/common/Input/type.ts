export interface InputProps {
  label?: string;
  type?: "string" | "number" | "date";
  placeholder: string;
  name?: string;
  min?: number;
  max?: number;

  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  enterSpace?: () => void;
}
