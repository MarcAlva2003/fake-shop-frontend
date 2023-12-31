export interface IInputComponent {
  iconLeft?: string;
  iconRight?: string;
  customLeft?: JSX.Element;
  customRight?: JSX.Element;
  size: "small" | "medium" | "large";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
