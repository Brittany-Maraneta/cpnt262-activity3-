// text boxes
function displayCredentials(username, password) {
  document.getElementById(
    "text"
  ).innerHTML = `Username: ${username}<br>Password: ${"*".repeat(
    password.length
  )}`;
}

// Function to remove white space and capitalize username
function removeSpacesAndCapitalize() {
  let usernameInput = document
    .getElementById("myText")
    .value.toUpperCase()

    //Text after
    .replace(/\s/g, "");
  let passwordInput = document.getElementById("password").value.trim();

  //after
  displayCredentials(usernameInput, passwordInput);
}

document
  .getElementById("enterButton")
  .addEventListener("click", removeSpacesAndCapitalize);
