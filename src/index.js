window.onload = () => {
  addListenerToSubmitFunction();
};

const userArray = [];

function saveUserData() {
  const user = {
    name: document.querySelector("#name").value,
    mail: document.querySelector("#mail").value,
    message: document.querySelector("#message").value,
  };
  userArray.push(user);

  localStorage.setItem(`userData`, JSON.stringify(userArray));
  document.querySelector("#myform").reset();
  paintDataInDOM();
}

function paintDataInDOM() {
  const arrayToPaint = [...JSON.parse(localStorage.getItem("userData"))];
  console.log(arrayToPaint);
  document.getElementById("added-users").innerHTML = "";

  arrayToPaint.forEach((element) => {
    const a = document.createElement("li");
    a.innerText = JSON.stringify(element);
    document.getElementById("added-users").appendChild(a);
  });
}

function addListenerToSubmitFunction() {
  document.querySelector("#buttonSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    saveUserData();
  });
}
