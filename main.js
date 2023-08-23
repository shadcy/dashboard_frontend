let arrow = document.querySelectorAll(".arrow");

arrow.forEach((btnArrow) => {
    btnArrow.addEventListener("click", () => {
        let arrowParent = btnArrow.parentElement.parentElement;
        arrowParent.classList.toggle("show-menu");
    });
});

let sidebar = document.querySelector(".sidebar");
let bxMenu = document.querySelector(".bx-menu");
console.log(bxMenu);

bxMenu.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    // bxMenu.classList.toggle("bx-fade-left");
});

