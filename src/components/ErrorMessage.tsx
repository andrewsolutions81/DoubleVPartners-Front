import React from "react";
import { ErrorMessageProps } from "../types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div>{message}</div>;
};

export default ErrorMessage;
