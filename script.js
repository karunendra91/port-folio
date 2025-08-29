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


new Typed('.typing-text', {
    strings: ['Web Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
    typespeed: 70,
      backspeed: 60,
      backdelay: 1500,
    loop: true, 
});



