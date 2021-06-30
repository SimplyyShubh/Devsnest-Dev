let card_container = document.querySelector('.card_container');

num_value = [1, 2, 3, 4, 5, 6, 7, 8];
num_value = [...num_value, ...num_value];

for (i = 1; i <= 16; i++) {
    let div = document.createElement('div');
    div.classList.add('card');
    card_container.appendChild(div);
    let rand = Math.floor(Math.random(num_value) * (17 - i));
    div.innerHTML = "<h2>" + num_value[rand] + "</h2>";
    num_value.splice(rand, 1);

}
let moves_counter = 0;
let correct_moves_counter = 0;
let card1_status = false;
let gamePause = false;
// let card1;
let card1_value;
let previousCard;
let card_selector = document.querySelectorAll('.card');


card_selector.forEach(
    (card =>
        card.addEventListener("click", () => {
            if (card1_status == false) { //1st card unflipped h
                card.classList.add('flipped'); //usko flip kiya
                card1_status = true; //status true kiya
                card1_value = card.innerHTML; //innertext ko card value ke equal kiya 
                previousCard = card; //current card ko ek variable mien store kiya
            } else { //ye tab work karega jab card1 ka status true ho and ab yahan pe true h
                if (card == previousCard) { return; }
                gamePause = true;
                moves_counter++;
                card.classList.add('flipped'); //card2 ko flip kra
                setTimeout(() => {

                    if (card1_value === card.innerHTML) { //unke inner values ko comapre kra if equal
                        previousCard.style.visibility = 'hidden'; //hide style of previous card
                        card.style.visibility = 'hidden'; //and current card style ko hide kro
                        correct_moves_counter++; //hence +1 correct move
                        correct_moves.innerHTML = correct_moves_counter;
                    } else {
                        previousCard.classList.remove('flipped'); //remove flipped from class list from card 1
                        card.classList.remove('flipped'); //same done for card2

                    }
                }, 1000)
                card1_status = false; //aur card1 ka status firse false  kr diya
            }
            moves.innerHTML = moves_counter;


        })
    )
);
card.style.visibility = 'hidden';
setInterval(() => {
    if (correct_moves_counter === 8) {
        alert("Game Over, You Won!");
        window.location.href = window.location.href;
        correct_moves_counter = 0;
    }
}, 100);