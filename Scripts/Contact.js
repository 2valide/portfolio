function sendEmail() {

    Email.send({
        SecureToken : "85d5ff6d-0e8e-41d2-9053-c948dc849290",
        To : 'anthonyzhao303@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact form ",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}