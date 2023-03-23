let user = document.getElementById("name").value;
function login(){
    let email = document.getElementById("mail").value;
    let password = document.getElementById("password").value;
    if(email !== "admin@gmail.com" || password !== "1234")
    Toastify({
        text: "Please Enter Informatin or Click on Forgot Password",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(red 10%, 30%, blue 90%);",
        },
        onClick: function(){} // Callback after click
      }).showToast();
    else{
        window.location = "home.html"
    }

}

document.getElementById("username").innerHTML = "<h3>Welcome "+ user+"</h3>";