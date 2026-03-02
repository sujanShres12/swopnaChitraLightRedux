"use client";

import { useDispatch } from "react-redux";
import { increase } from "../reduxToolkit/slice";
import { Dispatch } from "@reduxjs/toolkit";

export default function ButtonAction() {
  const dispatch = useDispatch<Dispatch>();
  const value = () => {
    dispatch(increase());
  };

  return <button onClick={value}>click me</button>;
}
