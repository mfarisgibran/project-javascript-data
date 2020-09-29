let canDriveCar;
let age = prompt("How old are you?");

if (age >= 18) {
  canDriveCar = true;
} else {
  canDriveCar = false;
}

canDriveCar
  ? alert("You're allowed to drive car")
  : alert("You're not allowed to drive car");
