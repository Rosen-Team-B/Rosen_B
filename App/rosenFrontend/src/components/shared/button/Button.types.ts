import { ButtonTypeMap } from "@mui/material/Button/Button";
import React from "react";

export interface buttonProps extends ButtonTypeMap {
  onClick: () => void;
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  radius: string;
  width: string;
  padding: string;
  background: string;
}
