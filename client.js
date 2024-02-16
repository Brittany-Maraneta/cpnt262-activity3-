// text boxes
function displayCredentials(username, password) {
  document.getElementById(
    "text"
  ).innerHTML = `Username: ${username}<br>Password: ${"*".repeat(
    password.length
  )}`;
}

// Remove white space and capitalize username
function removeSpacesAndCapitalize() {
  let usernameInput = document
    .getElementById("myText")
    .value.toUpperCase()
    .replace(/\s/g, "");
  let passwordInput = document.getElementById("password").value.trim();

  // console error
  let userText = /\d/.test(usernameInput);

  if (userText) {
    console.error("No numbers allowed in username!");
  } else {
    displayCredentials(usernameInput, passwordInput);
  }
}

document
  .getElementById("enterButton")
  .addEventListener("click", removeSpacesAndCapitalize);
