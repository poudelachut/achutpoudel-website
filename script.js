/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


if (mobileMenuBtn && mobileMenu) {


    mobileMenuBtn.addEventListener(
        "click",
        function () {

            mobileMenu.classList.toggle("active");


            const icon =
                mobileMenuBtn.querySelector("i");


            if (
                mobileMenu.classList.contains("active")
            ) {

                icon.classList.remove(
                    "fa-bars"
                );

                icon.classList.add(
                    "fa-xmark"
                );

            } else {

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        }
    );


    /* Close menu after clicking */

    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileMenu.classList.remove(
                        "active"
                    );


                    const icon =
                        mobileMenuBtn.querySelector("i");


                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }
            );

        }
    );

}/* =========================================
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
