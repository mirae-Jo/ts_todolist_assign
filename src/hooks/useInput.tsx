import React, { useState } from "react";
import { TTodo } from "../types/types";

export type TUseInput = ReturnType<typeof useInput>;
type IUseInput = [
  value: string,
  changeValueHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
];

const useInput = (): IUseInput => {
  const [value, setValue] = useState(""); // 초기값설정시 자동 타입 추론

  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return [value, changeValueHandler];
};

export default useInput;
