document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar").querySelectorAll("a");
    const currentLocation = location.href;  
    console.log(navbar);

    navbar.forEach((element) => {
        if (element.href === currentLocation) {
            element.classList.add("active");
        }

        element.addEventListener("click", function () {
            navbar.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
