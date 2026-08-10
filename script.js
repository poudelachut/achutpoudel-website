/* =========================================================
   ADV. ACHUT POUDEL — PERSONAL WEBSITE
   COMPLETE SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. MOBILE MENU
    ====================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("open");

            const icon = menuToggle.querySelector("i");

            if (mainNav.classList.contains("open")) {

                if (icon) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                }

                menuToggle.setAttribute(
                    "aria-label",
                    "Close navigation menu"
                );

            } else {

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            }

        });


        /* =================================================
           2. CLOSE MOBILE MENU AFTER CLICKING A LINK
        ================================================== */

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("open");

                const icon = menuToggle.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

    }


    /* =====================================================
       3. CLOSE MENU WHEN CLICKING OUTSIDE
    ====================================================== */

    document.addEventListener("click", function (event) {

        if (!mainNav || !menuToggle) {
            return;
        }

        const clickedInsideMenu =
            mainNav.contains(event.target);

        const clickedMenuButton =
            menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedMenuButton &&
            mainNav.classList.contains("open")
        ) {

            mainNav.classList.remove("open");

            const icon =
                menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }

    });


    /* =====================================================
       4. ACTIVE NAVIGATION
    ====================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();

    const allNavLinks =
        document.querySelectorAll(".main-nav a");

    allNavLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (!linkPage) {
            return;
        }

        const cleanLinkPage =
            linkPage
                .split("/")
                .pop()
                .split("#")[0]
                .toLowerCase();

        link.classList.remove("active");

        if (
            (currentPage === "" &&
                cleanLinkPage === "index.html") ||

            currentPage === cleanLinkPage
        ) {

            link.classList.add("active");

        }

    });


    /* =====================================================
       5. SMOOTH INTERNAL LINKS
    ====================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       6. CONTACT FORM
    ====================================================== */

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                /*
                 * Prevent the browser from showing
                 * a blank/error page if the form
                 * does not yet have a backend.
                 */

                event.preventDefault();


                const fullName =
                    document.getElementById("fullName");

                const email =
                    document.getElementById("email");

                const help =
                    document.getElementById("help");

                const message =
                    document.getElementById("message");


                /* -----------------------------------------
                   BASIC VALIDATION
                ------------------------------------------ */

                if (
                    !fullName ||
                    !email ||
                    !help ||
                    !message
                ) {

                    console.error(
                        "Contact form fields are missing."
                    );

                    return;

                }


                if (
                    fullName.value.trim() === "" ||
                    email.value.trim() === "" ||
                    help.value.trim() === "" ||
                    message.value.trim() === ""
                ) {

                    alert(
                        "Please complete all required fields."
                    );

                    return;

                }


                /* -----------------------------------------
                   EMAIL FORMAT CHECK
                ------------------------------------------ */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (
                    !emailPattern.test(
                        email.value.trim()
                    )
                ) {

                    alert(
                        "Please enter a valid email address."
                    );

                    email.focus();

                    return;

                }


                /*
                 * At this stage the form is validated.
                 *
                 * The website currently opens the user's
                 * email application using mailto.
                 */

                const subject =
                    encodeURIComponent(
                        "Website Inquiry — " +
                        help.value
                    );


                const body =
                    encodeURIComponent(

                        "Full Name: " +
                        fullName.value.trim() +
                        "\n\n" +

                        "Email: " +
                        email.value.trim() +
                        "\n\n" +

                        "How Can I Help?: " +
                        help.value.trim() +
                        "\n\n" +

                        "Message:\n" +
                        message.value.trim()

                    );


                const mailtoLink =
                    "mailto:poudel.achut@gmail.com" +
                    "?subject=" +
                    subject +
                    "&body=" +
                    body;


                window.location.href =
                    mailtoLink;

            }
        );

    }


    /* =====================================================
       7. CURRENT YEAR
    ====================================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


    /* =====================================================
       8. ESC KEY — CLOSE MOBILE MENU
    ====================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                mainNav &&
                mainNav.classList.contains("open")
            ) {

                mainNav.classList.remove("open");

                const icon =
                    menuToggle.querySelector("i");

                if (icon) {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            }

        }
    );

});/* =====================================================
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

}
