const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let cnt = 0;

number.innerText = cnt;

const updateText = () => {
  number.innerText = cnt;
};

const handleAdd = () => {
  cnt = cnt + 1;
  updateText();
};

const handleMinus = () => {
  cnt = cnt - 1;
  updateText();
};


add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);