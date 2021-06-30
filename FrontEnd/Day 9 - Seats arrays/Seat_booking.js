var seat_left = document.querySelector(".seat_left");
// console.log(seat_left);
var seat_selected = document.querySelector(".seat_selected");
// console.log(seat_selected);
// totalSeat = 36;
const seat = document.querySelectorAll(".box").forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('boxclicked')) {
            item.classList.remove('boxclicked');
            seat_selected.value -= 1;
            seat_left.value = parseInt(seat_left.value) + 1;
            // document.getElementById("seat_left").innerText = "Seat left:" + seat_left;
            // document.getElementById("seat_selected").innerText = "Seat selected:" + seat_selected;
        } else {
            item.classList.add('boxclicked');
            seat_left.value -= 1;
            seat_selected.value = parseInt(seat_selected.value) + 1;
            // document.getElementById("seat_left").value = "Seat left:" + seat_left;
            // document.getElementById("seat_selected").innerText = "Seat selected:" + seat_selected;
        }

    })
})