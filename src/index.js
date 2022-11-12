import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (state = 0) => {
  return state;
}; //reducer = function, data를 수정

const store = createStore(reducer); //store = data를 저장하는 곳

console.log(store.getState());