// npm package
import { useContext } from "react";
import { useDispatch } from "react-redux";

// contexts
import Context1 from "../../../Contexts/Context1";
import Context2 from "../../../Contexts/Context2";
import Context3 from "../../../Contexts/Context3";
import Context4 from "../../../Contexts/Context4";

export const useContext1 = () => useContext(Context1);
export const useContext2 = () => useContext(Context2);
export const useContext3 = () => useContext(Context3);
export const useContext4 = () => useContext(Context4);


// redux
export const useDispatchCustom = () => useDispatch();
