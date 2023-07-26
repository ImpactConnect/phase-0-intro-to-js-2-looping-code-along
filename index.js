// Code your solutions in this file
// const names = ["Guadalupe,", "Ollie,", "Aki"];

// function writeCards() {
//   let name = 0;
//   while (name < names.length) {
//     console.log(`Thank you, ${names[name]} for the wonderful surprise gift!`);
//     name++;
//   }
//   return names;
// }
// writeCards();

function writeCards(names) {
  const thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]} for the wonderful surprise gift!`;
    thankYouMessages.push(message);
  }

  return thankYouMessages;
}

const namesArray = ["Guadalupe,", "Ollie,", "Aki"];
const messages = writeCards(namesArray);
console.log(messages);
//=======

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
countDown(10);
