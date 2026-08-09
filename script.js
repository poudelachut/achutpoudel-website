/* =========================================================
   ACHUT POUDEL — WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuButton || !mobileMenu) {
        return;
    }


    menuButton.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

        const icon = menuButton.querySelector("i");

        if (mobileMenu.classList.contains("active")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

            menuButton.setAttribute(
                "aria-label",
                "Close menu"
            );

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );
        }

    });


    /* Close mobile menu after clicking a link */

    const mobileLinks =
        mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

            const icon =
                menuButton.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

        });

    });

});
