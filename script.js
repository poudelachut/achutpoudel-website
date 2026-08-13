/* =========================================================
   ADV. ACHUT POUDEL
   WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNavigation =
        document.getElementById("mainNavigation");


    if (menuToggle && mainNavigation) {

        menuToggle.addEventListener("click", function () {

            mainNavigation.classList.toggle("open");


            const isOpen =
                mainNavigation.classList.contains("open");


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });


        /* Close menu after clicking a link */

        const navigationLinks =
            mainNavigation.querySelectorAll("a");


        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNavigation.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       ACTIVE NAVIGATION
       Works with separate HTML pages
    ===================================================== */

    const currentPage =
        window.location.pathname
        .split("/")
        .pop();


    const navLinks =
        document.querySelectorAll(".nav-link");


    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href")
            .split("/")
            .pop();


        if (
            linkPage === currentPage ||
            (currentPage === "" &&
             linkPage === "index.html")
        ) {

            navLinks.forEach(function (item) {

                item.classList.remove("active");

            });

            link.classList.add("active");

        }

    });


});
