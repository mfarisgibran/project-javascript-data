const birthYear = prompt("When were you born?");

if (birthYear == 1993) {
  window.alert("Correct!");
} else if (birthYear < 1720) {
  window.alert("That's impossible!");
} else if (birthYear > 2020) {
  window.alert("Are you time traveller?");
} else {
  window.alert("Wrong!");
}
