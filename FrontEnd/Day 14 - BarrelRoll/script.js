const body = document.querySelector('body');
const butn = document.querySelector('button');
const main_body = document.querySelector('main_body');
butn.addEventListener('dblclick', () => {
    body.classList.add('do_a_barrel_roll');
    setTimeout(removeclass, 3000);
})


butn.addEventListener('onmouseenter', () => {
    fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1').then(res => (res.json()).then(res => {
        displayDetails();
        console.log(res.quotes[0].text);
    }))
})

butn.addEventListener('onmouseleave', () => {
    removequote();

})

function displayDetails(res) {
    // const div = document.createElement('div');
    // div.classList.add('quote');
    main_body.innerHTML = res.quotes[0].text;
    // main_body.append(div);

}

function removequote() {
    main_body.innerText = ''
    console.log("deleted");
}

function removeclass() {

    body.classList.remove("do_a_barrel_roll");
    console.log('removed');

}