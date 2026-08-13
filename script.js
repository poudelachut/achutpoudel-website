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

            const isOpen =
                mainNavigation.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


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


        document.addEventListener("click", function (event) {

            if (
                !mainNavigation.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                mainNavigation.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

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
    ===================================================== */

    const currentPage =
        window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();


    const navLinks =
        document.querySelectorAll(".nav-link");


    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href")
            .split("/")
            .pop()
            .toLowerCase();


        link.classList.remove("active");


        if (
            linkPage === currentPage ||
            (
                currentPage === "" &&
                linkPage === "index.html"
            )
        ) {

            link.classList.add("active");

        }

    });


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");


    const formMessage =
        document.getElementById("formMessage");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document.getElementById("name").value.trim();

                const email =
                    document.getElementById("email").value.trim();

                const message =
                    document.getElementById("message").value.trim();


                if (!name || !email || !message) {

                    if (formMessage) {

                        formMessage.textContent =
                            "Please complete all required fields.";

                    }

                    return;

                }


                /*
                 * This creates an email message using the visitor's
                 * default email application.
                 *
                 * Replace the email address below with your
                 * preferred professional email address if required.
                 */

                const subjectInput =
                    document.getElementById("subject");


                const subject =
                    subjectInput
                        ? subjectInput.value.trim()
                        : "";


                const mailSubject =
                    subject ||
                    "Website Contact - Adv. Achut Poudel";


                const mailBody =
                    "Name: " + name +
                    "\nEmail: " + email +
                    "\n\nMessage:\n" + message;


                const mailto =
                    "mailto:poudel.achut@gmail.com" +
                    "?subject=" +
                    encodeURIComponent(mailSubject) +
                    "&body=" +
                    encodeURIComponent(mailBody);


                window.location.href = mailto;


                if (formMessage) {

                    formMessage.textContent =
                        "Your email application is opening...";

                }

            }
        );

    }


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href$=".html"]'
        );


    internalLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            /*
             * No target="_blank" is used for internal pages.
             * Therefore they open in the same browser tab.
             */

        });

    });

});
