// JavaScript Document
var button = document.querySelector(".WriteUs");
var modalPopUp = document.querySelector(".popUp");
var closePopUp = modalPopUp.querySelector("input.popUpExit");
var form = modalPopUp.querySelector("form");
var fullName = form.querySelector("[name=fullName]");
var email = form.querySelector("[name=email]");
var comment = form.querySelector("[name=comment]");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPopUp.classList.add("popUpShow");
    modalPopUp.classList.add("popupOpenAnimate");
    setTimeout(() => {
        modalPopUp.classList.remove("popupOpenAnimate");
    }, 2000);
    fullName.focus();
});

closePopUp.addEventListener("click", closePopUpFnc);

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalPopUp.classList.contains("popUpShow")) {
            closePopUpFnc(evt);
        }
    }
});

function closePopUpFnc(evt) {
    evt.preventDefault();
    modalPopUp.classList.add("popupClose");
    modalPopUp.classList.add("popupOpenAnimate");

    setTimeout(() => {
        modalPopUp.classList.remove("popUpShow");
        modalPopUp.classList.remove("popupOpenAnimate");
        modalPopUp.classList.remove("popupError");
    }, 800);
}

modalPopUp.addEventListener("submit", function (evt) {
    if (!fullName.value || !email.value || !comment.value) {
        evt.preventDefault();
        modalPopUp.classList.remove("popupError");
        modalPopUp.offsetWidth = modalPopUp.offsetWidth;
        modalPopUp.classList.add("popupError");
    }
})
