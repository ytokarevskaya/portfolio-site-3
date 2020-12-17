





function pageLoad() {
    let menuBtn = document.querySelector(".mobile-menu__button");
    let menuClose = document.querySelector(".mobile-menu__close");
    let mobileMenu = document.querySelector(".mobile-menu");
    let footerBtn = document.querySelector(".footer__button");
    let formClose = document.querySelector(".modal__close");
    let modalForm = document.querySelector(".modal__overlay");

    menuBtn.addEventListener("click", openMenu);
    menuClose.addEventListener("click", closeMenu);

    footerBtn.addEventListener("click", openForm);
    formClose.addEventListener("click", closeForm);

    function openMenu() {
        mobileMenu.classList.add("is-opened");
    }

    function closeMenu() {
        mobileMenu.classList.remove("is-opened");
    }

    function openForm() {
        modalForm.classList.add("is-opened");
    }

    function closeForm() {
        modalForm.classList.remove("is-opened");
    }
}

document.addEventListener("DOMContentLoaded", pageLoad);