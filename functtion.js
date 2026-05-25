const elements = document.querySelectorAll("section");

function checkScroll() {
    elements.forEach(e1 => {
        const pos = e1.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            e1.classList.add("show");
        } else {
            e1.classList.remove("show");
        }

    });
};

window.addEventListener("scroll", checkScroll);

checkScroll();