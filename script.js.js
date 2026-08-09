/* =========================================
   ACHUT POUDEL WEBSITE
========================================= */


/* Current Year */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* Contact Form */

function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please complete all fields.");
        return;
    }

    const subject =
        encodeURIComponent(
            "Website Inquiry from " + name
        );

    const body =
        encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

    window.location.href =
        "mailto:Poudel.achut@gmail.com" +
        "?subject=" + subject +
        "&body=" + body;
}


/* Smooth navigation */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
