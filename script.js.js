// ========================================
// CURRENT YEAR
// ========================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ========================================
// CONTACT MESSAGE
// ========================================

function sendMessage(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    const subject =
        "Website Contact - " + name;


    const body =
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message;


    const mailto =
        "mailto:Poudel.achut@gmail.com" +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);


    window.location.href = mailto;

}