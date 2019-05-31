import * as React from "react";

interface IInputProps {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({
  value,
  onChange
}) => {
  return (
    <input type="text" placeholder="title" value={value} onChange={onChange} />
  );
};

interface IFormProps {
  onFormSubmit: (event: React.FormEvent) => void;
}

export const Form: React.FunctionComponent<IFormProps> = ({
  children,
  onFormSubmit
}) => <form onSubmit={onFormSubmit}>{children}</form>;
