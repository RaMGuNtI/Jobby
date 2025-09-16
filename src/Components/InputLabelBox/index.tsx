import { forwardRef, type ReactNode } from 'react';
import { InputBox, Input } from './styledComp';

interface Props {
  label: string;
  id: string;
  type: string;
  placeHolder: string;
}

const InputLabelBox = forwardRef<HTMLInputElement, Props>(
  ({ label, id, type, placeHolder }, ref): ReactNode => {
    return (
      <InputBox>
        <label htmlFor={id}>{label}</label>
        <Input ref={ref} id={id} type={type} placeholder={placeHolder} />
      </InputBox>
    );
  }
);

export default InputLabelBox;
