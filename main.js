// 변수 선언
const Top = document.querySelector(".fa-arrow-up-wide-short");
const career = document.querySelector(".introductionButton");
const intro = document.querySelector(".introTitle");
const project = document.querySelector(".projectButton");
const second = document.querySelector(".secondPageTitle");
const contact = document.querySelector(".contactButton");
const third = document.querySelector(".thirdPageTitle");

// 함수 선언
function scrollToTop() {
  window.scrollTo(0, 0);
}
function scrollTocareer() {
  intro.scrollIntoView({ behavior: "smooth", block: "center" });
}
function scrollToproject() {
  second.scrollIntoView({ behavior: "smooth", block: "center" });
}
function scrollTocontact() {
  third.scrollIntoView({ behavior: "smooth", block: "center" });
}

// 이벤트리스너

Top.addEventListener("click", scrollToTop);
//
career.addEventListener("click", scrollTocareer);
project.addEventListener("click", scrollToproject);
contact.addEventListener("click", scrollTocontact);
