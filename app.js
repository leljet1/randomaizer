let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let out = document.querySelector('.out');
let btn = document.querySelector('.btn');

btn.addEventListener('click', randomNumber);

function randomNumber () {
    let min = parseInt(inp1.value);
    let max = parseInt(inp2.value);

    if (min == max) {
        max++;
    } else if (min > max) {
        max = min + 1;
    }

    inp1.value = min;
    inp2.value = max;

    out.innerHTML = Math.floor(Math.random() * (max - min + 1) + min);
}