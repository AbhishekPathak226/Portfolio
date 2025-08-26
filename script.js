
// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


// EmailJS Script 

 

  // Initialize EmailJS
  (function () {
    emailjs.init("lYOM9gGIU1OQQXiUm"); // ✅ अपनी Public Key डालें
  })();

  document.getElementById("sendBtn").addEventListener("click", function (e) {
    e.preventDefault();

    // Input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const message = document.getElementById("message").value;

    // Params
    const params = {
      from_name: name,
      reply_to: email,
      mobile: mobile,
      message: message,
    };

    // Send Email
    emailjs.send("service_ih8sx47", "template_afor8gz", params).then(
      function (response) {
        document.getElementById("form-status").innerText =
          "✅ Message Sent Successfully!";
        document.getElementById("form-status").style.color = "green";
      },
      function (error) {
        document.getElementById("form-status").innerText =
          "❌ Failed! " + JSON.stringify(error);
        document.getElementById("form-status").style.color = "red";
      }
    );
  });