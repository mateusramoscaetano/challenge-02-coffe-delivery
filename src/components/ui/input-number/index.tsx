import { Minus, Plus } from "phosphor-react";
import { InputNumber as Input, InputNumberContainer } from "./style";

interface IInputNumberProps {
  addNumber: () => void;
  removeNumber: () => void;
  number: number;
}

export function InputNumber({
  addNumber,
  number,
  removeNumber,
}: IInputNumberProps) {
  return (
    <>
      <>
        <InputNumberContainer>
          <Minus size={14} onClick={removeNumber} />
          <Input>{number}</Input>
          <Plus size={14} onClick={addNumber} />
        </InputNumberContainer>
      </>
    </>
  );
}
