

const btn = document.querySelector('.theme-btn')


function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

var clicks = 0;

btn.addEventListener('click', () => {


    console.log(++clicks)
    console.log(Object(), Object.prototype);
    console.log("hii");
    console.log(Object.prototype.constructor.prototype.constructor.prototype);

    const rndcol = `rgb(${random(255)}, ${random(255)}, ${random(225)})`;
    document.body.style.backgroundColor = rndcol;
}

);