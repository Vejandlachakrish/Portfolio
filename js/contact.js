// Initialize EmailJS
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("MbuBRWYNPN2FyQpmm"); // Replace with your public key
});

// Handle form submission
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let responseMessage = document.getElementById("responseMessage");

    if (name === "" || email === "" || message === "") {
      responseMessage.style.color = "red";
      responseMessage.innerText = "Please fill all fields.";
      return;
    }

    // EmailJS Integration
    emailjs
      .send(
        "service_ij7hl1t", // Corrected service ID for Gmail
        "template_xhial6o", // Replace with your template ID
        {
          name: name,
          email: email,
          subject: subject,
          message: message,
        },
        "MbuBRWYNPN2FyQpmm" // Replace with your public key
      )
      .then(
        function (response) {
          console.log("Success:", response); // Log the success response
          responseMessage.style.color = "green";
          responseMessage.innerText = "Message sent successfully!";

          // Reset the form
          document.getElementById("contactForm").reset();
        },
        function (error) {
          console.error("Error sending email:", error); // Log the error object
          responseMessage.style.color = "red";
          responseMessage.innerText = "Error sending message. Try again later.";
        }
      );
  });
