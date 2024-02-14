//text box
function textBox() {
  let box = document.getElementById("myText").value;
  document.getElementById("text").innerHTML = box;
}

// removing white space and adding capitals
function removeSpacesAndCapitalize() {
  let input = document.getElementById("myText");
  let inputValue = input.value;

  inputValue = inputValue.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });

  //your text box after
  input.value = inputValue.replace(/\s/g, "");
  textBox();
}

function removePlaceholder() {
  let input = document.getElementById("myText");
  if (input.value === "...") {
    input.value = "";
  }
}
