function login() {
  let user = document.getElementById("name").value;
  let email = document.getElementById("mail").value;
  let password = document.getElementById("password").value;
  if (email !== "admin@gmail.com" || password !== "1234")
    Toastify({
      text: "Please Informatin or Click on Forgot Password",
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
      onClick: function () { } // Callback after click
    }).showToast();
  else {
    // Body Classes Removal
    var BODY = document.getElementById("BODY");
    BODY.classList.remove("d-flex", "align-items-center", "justify-content-center");
    // login Form
    var form = document.getElementById("form");
    form.classList.add("d-none");
    // Welcome Page Header
    var Header = document.getElementById("header");
    Header.classList.remove("d-none");
    // Welcome Page 
    var welcome = document.getElementById("welcome-page");
    welcome.classList.remove("d-none");
    // Welcome Note
    document.getElementById("header").innerHTML = "<h3 style='color: white;'>Welcome "+ user + "</h3>"
  }

}


//------------------O-N  W-e-l-c-o-m-e------------------

let origninalText = "I love my country Pakistan. <br> I love my city Faisalabad.<br> I love my homeland."
let cities = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Quetta"]




//PRINT CITIES

function printCities() {
  document.getElementById("output").innerHTML = " ";

  for (i = 0; i < cities.length; i++) {
    let num = i + 1
    document.getElementById("output").innerHTML += num + ")" + " " + cities[i] + " " + "<br>"
  }
}

// ADD CITY

function addCity() {
  let newCity = document.getElementById("our-input").value;
  if (!newCity) {
    Toastify({
      text: "Please Enter City Name Correctly",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
    return;
  }
  newCityFirstLetter = newCity.charAt(0).toUpperCase();
  newCityAllLetters = newCity.slice(1).toLowerCase();
  newCityInCapitalize = newCityFirstLetter + newCityAllLetters;

  let cityFound = false;
  for (i = 0; i < cities.length; i++) {
    if (cities[i] === newCityInCapitalize) {
      cityFound = true;

      Toastify({
        text: "City Name is Already There",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
      }).showToast();
    }
  }

  if (cityFound === false) {
    cities.push(newCityInCapitalize);
    document.getElementById("output").innerHTML = "<span style='color:green'>" + newCityInCapitalize + "&quot" + '</span>' + " has been successfully added into the list"
    Toastify({
      text: "City Name Successfully Added to List",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () { } // Callback after click
    }).showToast();
    document.getElementById("print-cities").onclick = function () {
      document.getElementById("output").innerHTML = " "
      for (i = 0; i < cities.length; i++) {
        num = i + 1;
        document.getElementById("output").innerHTML += num + ")" + " " + cities[i] + "<br>"
      }
    }

  }
}

// Check City

function checkCity() {
  let checkCity = document.getElementById("our-input").value;
  if (!checkCity) {
    Toastify({
      text: "Please Enter City Name Correctly",
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
      onClick: function () { } // Callback after click
    }).showToast();
    return;
  }
  checkCityFirstLetter = checkCity.charAt(0).toUpperCase();
  checkCityAllLetters = checkCity.slice(1).toLowerCase();
  checkCityWordInCapitalize = checkCityFirstLetter + checkCityAllLetters;

  let cityFound = false;
  for (i = 0; i < cities.length; i++) {
    if (cities[i] === checkCityWordInCapitalize) {
      cityFound = true;
      document.getElementById("output").innerHTML = "Your city " + "<span style='color:green'>" + checkCityWordInCapitalize + "</span>" + " is available in list"
      Toastify({
        text: "Your City Name is Available in List",
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
        onClick: function () { } // Callback after click
      }).showToast();
    }
  }
  if (cityFound === false) {
    document.getElementById("output").innerHTML = "Sorry we couldn't found your city " + "<span style='color:red'>" + checkCityWordInCapitalize + "</span>" + " in the list"
  }

}

// CLEAR OUTPUT

document.getElementById("clear-output").onclick = function () {
  document.getElementById("output").innerHTML = " "
}
