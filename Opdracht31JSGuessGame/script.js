/** @format */

let name = prompt("Voer je naam in: ");
alert("Hallo " + name);
alert("Wil je een spelletje met me spelen?");
let low_number = prompt(
  "Voer het Laagste nummer in waar je tussen wilt gokken: "
);
let high_number = prompt(
  "Voer het hoogste nummer in waar je tussen wilt gokken: "
);

const message =
  "Raad een nummer tussen " +
  low_number +
  " en " +
  high_number +
  ":" +
  "je hebt 5 kansen!";

let random_num = Math.floor(
  Math.random() * (high_number - low_number) + low_number
);

console.log(random_num);
let guesses = 0;
const maxGuess = 5;

while (guesses != maxGuess) {
  let guess = prompt(message);
  guesses += 1;
  if (guess == random_num) {
    alert("Je hebt em goed joh !!");
    break;
  } else if (guess < random_num) {
    alert("Je moet iets hoger gokken! je zit al op " + guesses + " beurten");
  } else if (guess > random_num) {
    alert("Je moet iets lager gokken! je zit al op " + guesses + " beurten");
  }
}
