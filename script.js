let numbersArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let cardContainer = document.getElementById('cards-container');

numbersArray.forEach((num) => {
    cardContainer.innerHTML += '<li card=' + num + '>' + num + '</li>'
})


shuffleArray = () => {

    numbersArray = numbersArray.sort(() => { return .5 - Math.random() });
    cardContainer.innerHTML = ''

    for (let i = 0; i < numbersArray.length; i++) {
        let card = document.createElement("li");
        card.innerHTML = numbersArray[i]
        card.setAttribute('card', numbersArray[i])
        cardContainer.appendChild(card)
    }
}

sortArray = () => {
    numbersArray = numbersArray.sort((a, b) => { return a - b });
    cardContainer.innerHTML = ''
    
    for (let i = 0; i < numbersArray.length; i++) {
        let card = document.createElement("li");
        card.innerHTML = numbersArray[i]
        card.setAttribute('card', numbersArray[i])
        cardContainer.appendChild(card)
    }
}