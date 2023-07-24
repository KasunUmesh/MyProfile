function sendMail() {
  var params = {
    name: document.getElementById("yourName").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_7xhrr3q";
  const templateID = "template_n3pti7o";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("yourName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      alert("Message Sent Successfully");
    })
    .catch((err) => console.log(err));
}
