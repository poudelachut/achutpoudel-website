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
