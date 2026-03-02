"use client";
import { useSelector } from "react-redux";
import { initialState } from "../reduxToolkit/slice";
import { store } from "../reduxToolkit/store";

export default function ReduxTest() {
  const value = useSelector((data: any) => {
    return data.increamentReducer.number;
  });
  return <div>{value}</div>;
}
