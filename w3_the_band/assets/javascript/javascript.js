let isOpeningMenu = false;

const navItems = document.querySelectorAll(".navigator li a");

navItems.forEach((element) => {
    let isSubnavSwitcher =
        element.nextElementSibling &&
        element.nextElementSibling.classList.contains("sub-nav");

    element.addEventListener("click", (event) => {
        if (isSubnavSwitcher) {
            event.preventDefault();
        } else {
            if (header.classList.contains("height-auto")) {
                header.classList.remove("height-auto");
            }
        }
    });
});

const switcherMobileMenu = document.querySelector(".mobile-menu-switcher");
const header = document.querySelector(".header");

switcherMobileMenu.addEventListener("click", () => {
    if (header.classList.contains("height-auto")) {
        header.classList.remove("height-auto");
    } else {
        header.classList.add("height-auto");
    }
    isOpeningMenu = !isOpeningMenu;
});

let ticketLeft = localStorage.getItem("ticket-left");
if (!ticketLeft) {
    localStorage.setItem("ticket-left", 10);
    ticketLeft = 10;
}

const ticketLeftElement = document.getElementById("ticket-left");
ticketLeftElement.innerHTML = ticketLeft;

const closeModal = () => {
    modalBuyTicket.classList.remove("modal-open");
    modalBuyTicket.classList.add("modal-close");
};
const openModal = () => {
    modalBuyTicket.classList.remove("modal-close");
    modalBuyTicket.classList.add("modal-open");
};
const buyTicket = () => {
    if (ticketLeft > 0) {
        alert("Thank you so much !");
        ticketLeft = ticketLeft - 1;
        localStorage.setItem("ticket-left", ticketLeft);
    } else {
        alert("Oops! We run out of ticket!");
    }
    const ticketLeftElement = document.getElementById("ticket-left");
    ticketLeftElement.innerHTML = ticketLeft;

    closeModal();
};

const modalBuyTicket = document.querySelector(".modal");
const modalContainerBuyTicket = document.querySelector(".modal-container");

modalBuyTicket.addEventListener("click", closeModal);
modalContainerBuyTicket.addEventListener("click", (e) => {
    e.stopPropagation();
});

const buyTicketBtns = document.querySelectorAll(".buy-ticket");
for (const buyTicketBtn of buyTicketBtns) {
    buyTicketBtn.addEventListener("click", openModal);
}
const btnCloseModal = document.querySelector(".modal-close-btn");
btnCloseModal.addEventListener("click", closeModal);
