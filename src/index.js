import { createStore } from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = (cnt = 0, action) => {
  //cnt를 +, - 하는건 action을 통해 가능
  //action은 redux function을 호출할때 쓰는 두번째 parameter
  if (action.type === "ADD") {
    return cnt + 1;
  } else if (action.type === "MINUS") {
    return cnt - 1;
  } else {
    return 0;
  }
}; //reducer = function, data를 수정

const store = createStore(reducer); //store = data를 저장하는 곳


store.dispatch({ type: "ADD" }); //reducer에게 message를 보내는 것


console.log(store.getState());