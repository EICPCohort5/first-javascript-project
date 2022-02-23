console.log('Eventually shows form data here.');

// Add an event listener for the button
let button = document.querySelector('#get-name-button');
button.addEventListener('click', function () {
  // console.log('You clicked on the button');

  // Get the text content of the form field
  let input = document.querySelector('#your-name');

  // Get the names list element
  let nameList = document.querySelector('#names-list');

  // Don't add anything if empty
  if (input.value) {
    // Create new List item element and add the name to it
    let newNameListItem = document.createElement('li');
    newNameListItem.textContent = `${input.value}`;
    nameList.append(newNameListItem);
  }

  // Clear the text box after adding name
  input.value = "";


  // Log to the console
  // console.log(`Hello, ${input.value}!`);
});
