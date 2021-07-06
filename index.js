// Code your solutions in this file

function writeCards(names, eventName) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
      }
    return thankYouCards
}

function countDown(startingNumber) {
    while (startingNumber >= 0) { // WHILE loop only needs the condition
        console.log(startingNumber)
        startingNumber--
    }
}



