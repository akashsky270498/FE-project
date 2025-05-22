const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (btn) {
    console.log(btn)
  btn.addEventListener("click", function (e) {
    console.log(e);
    console.log("fff",e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "orange") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
