/* =========================================
   MOBILE NAVIGATION
========================================= */

const mobileMenuToggle =
    document.getElementById("mobileMenuToggle");

const navMenu =
    document.getElementById("navMenu");


if (mobileMenuToggle && navMenu) {


    /* Open / Close Mobile Menu */

    mobileMenuToggle.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle("active");

            mobileMenuToggle.classList.toggle("active");


            const isOpen =
                navMenu.classList.contains("active");


            mobileMenuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    /* Close menu when navigation link is clicked */

    const navLinks =
        navMenu.querySelectorAll(".nav-link");


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navMenu.classList.remove("active");

                    mobileMenuToggle.classList.remove("active");

                    mobileMenuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );

}
