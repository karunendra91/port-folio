(function () {
    emailjs.init("YOUR_USER_ID"); // Get this from EmailJS dashboard
  })();

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
      function () {
        alert("Message sent successfully!");
      },
      function (error) {
        alert("Failed to send message. Error: " + JSON.stringify(error));
      }
    );
  });





