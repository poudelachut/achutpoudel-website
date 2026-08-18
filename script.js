/* =========================================================
   ADV. ACHUT POUDEL
   PREMIUM CINEMATIC PERSONAL WEBSITE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {


    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const mobileToggle =
      document.querySelector(".mobile-toggle");

    const mainNavigation =
      document.querySelector(".main-navigation");


    if (
      mobileToggle &&
      mainNavigation
    ) {


      mobileToggle.addEventListener(
        "click",
        function () {

          const isOpen =
            mainNavigation.classList.toggle(
              "show"
            );


          mobileToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
          );


          mobileToggle.setAttribute(
            "aria-label",
            isOpen
              ? "Close navigation"
              : "Open navigation"
          );

        }
      );


      /* CLOSE AFTER NAVIGATION */

      const navigationLinks =
        mainNavigation.querySelectorAll("a");


      navigationLinks.forEach(
        function (link) {

          link.addEventListener(
            "click",
            function () {

              mainNavigation.classList.remove(
                "show"
              );


              mobileToggle.setAttribute(
                "aria-expanded",
                "false"
              );


              mobileToggle.setAttribute(
                "aria-label",
                "Open navigation"
              );

            }
          );

        }
      );


      /* CLOSE WHEN CLICKING OUTSIDE */

      document.addEventListener(
        "click",
        function (event) {

          const clickedNavigation =
            mainNavigation.contains(
              event.target
            );


          const clickedButton =
            mobileToggle.contains(
              event.target
            );


          if (
            !clickedNavigation &&
            !clickedButton
          ) {

            mainNavigation.classList.remove(
              "show"
            );


            mobileToggle.setAttribute(
              "aria-expanded",
              "false"
            );


            mobileToggle.setAttribute(
              "aria-label",
              "Open navigation"
            );

          }

        }
      );


      /* ESCAPE KEY */

      document.addEventListener(
        "keydown",
        function (event) {

          if (
            event.key === "Escape"
          ) {

            mainNavigation.classList.remove(
              "show"
            );


            mobileToggle.setAttribute(
              "aria-expanded",
              "false"
            );


            mobileToggle.setAttribute(
              "aria-label",
              "Open navigation"
            );

          }

        }
      );


      /* RESET WHEN RETURNING TO DESKTOP */

      window.addEventListener(
        "resize",
        function () {

          if (
            window.innerWidth > 820
          ) {

            mainNavigation.classList.remove(
              "show"
            );


            mobileToggle.setAttribute(
              "aria-expanded",
              "false"
            );

          }

        }
      );

    }



    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const currentPage =
      window.location.pathname
        .split("/")
        .pop() || "index.html";


    const navLinks =
      document.querySelectorAll(
        ".main-navigation .nav-link"
      );


    navLinks.forEach(
      function (link) {

        const linkPage =
          link.getAttribute("href");


        if (!linkPage) {
          return;
        }


        link.classList.remove(
          "active"
        );


        link.removeAttribute(
          "aria-current"
        );


        if (
          linkPage === currentPage ||
          (
            currentPage === "" &&
            linkPage === "index.html"
          )
        ) {

          link.classList.add(
            "active"
          );


          link.setAttribute(
            "aria-current",
            "page"
          );

        }

      }
    );



    /* =====================================================
       CINEMATIC REVEAL ANIMATION
       ===================================================== */

    const revealElements =
      document.querySelectorAll(
        ".reveal"
      );


    if (
      revealElements.length > 0
    ) {


      const prefersReducedMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;


      if (
        prefersReducedMotion ||
        !("IntersectionObserver" in window)
      ) {


        revealElements.forEach(
          function (element) {

            element.classList.add(
              "visible"
            );

          }
        );


      } else {


        const revealObserver =
          new IntersectionObserver(
            function (
              entries,
              observer
            ) {


              entries.forEach(
                function (entry) {

                  if (
                    entry.isIntersecting
                  ) {

                    entry.target.classList.add(
                      "visible"
                    );


                    observer.unobserve(
                      entry.target
                    );

                  }

                }
              );


            },
            {
              threshold: 0.12,
              rootMargin:
                "0px 0px -40px 0px"
            }
          );


        revealElements.forEach(
          function (element) {

            revealObserver.observe(
              element
            );

          }
        );

      }

    }



    /* =====================================================
       SMOOTH INTERNAL LINKS
       ===================================================== */

    const internalLinks =
      document.querySelectorAll(
        'a[href^="#"]'
      );


    internalLinks.forEach(
      function (link) {

        link.addEventListener(
          "click",
          function (event) {

            const targetId =
              link.getAttribute("href");


            if (
              !targetId ||
              targetId === "#"
            ) {

              return;

            }


            const target =
              document.querySelector(
                targetId
              );


            if (target) {

              event.preventDefault();


              target.scrollIntoView(
                {
                  behavior: "smooth",
                  block: "start"
                }
              );

            }

          }
        );

      }
    );



    /* =====================================================
       REDUCED MOTION
       ===================================================== */

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );


    if (
      reducedMotion.matches
    ) {

      document.documentElement.classList.add(
        "reduce-motion"
      );

    }


    reducedMotion.addEventListener(
      "change",
      function (event) {

        if (event.matches) {

          document.documentElement.classList.add(
            "reduce-motion"
          );

        } else {

          document.documentElement.classList.remove(
            "reduce-motion"
          );

        }

      }
    );


  }
);
