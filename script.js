// Function to clear the calculator screen
function clearScreen() {
  document.getElementById("screen").value = "";
}

// Function to delete the last character from the screen
function deleteChar() {
  const screen = document.getElementById("screen");
  screen.value = screen.value.slice(0, -1);
}

// Function to append a number or operator to the screen
function appendNumber(number) {
  const screen = document.getElementById("screen");
  screen.value += number;
}

// Function to append an operator to the screen
function appendOperator(operator) {
  const screen = document.getElementById("screen");
  const lastChar = screen.value.slice(-1);
  
  // Prevent appending operator if the last character is already an operator
  if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/' && lastChar !== '') {
      screen.value += operator;
  }
}

// Function to calculate the result
function calculate() {
  const screen = document.getElementById("screen");
  try {
      // Evaluate the expression and display the result
      screen.value = eval(screen.value);
  } catch (error) {
      // In case of an error, clear the screen or display an error message
      screen.value = "Error";
      setTimeout(clearScreen, 1500); // Clear the screen after 1.5 seconds
  }
}
