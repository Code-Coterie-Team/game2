const screens = document.querySelectorAll('.screen');
const timer = document.querySelector('.timer');
const scoreDisplay = document.querySelector('.score');
const annoyedMessage = document.querySelector('.annoyed-message');
let seconds = 0;
let score = 0;
let selectedInsect = null;

function startGame() {
    screens[0].classList.add('up');
}

function chooseFavInsect(insect) {
    selectedInsect = insect;
    screens[1].classList.add('up');
    setInterval(increaseTime, 1000);
    spawnInsect();
}

function increaseTime() {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;
    timer.innerHTML = `Time: ${m}:${s}`;
    seconds++;
}

function spawnInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    insect.style.top = `${Math.random() * (window.innerHeight - 200) + 100}px`; 
    insect.style.left = `${Math.random() * (window.innerWidth - 200) + 100}px`;

    insect.innerHTML = `<img src="img/${selectedInsect}_PNG18175.png" alt="${selectedInsect}" style="width: 100px; height: 100px;">`;

    document.body.appendChild(insect);

    insect.addEventListener('click', catchInsect);
}

function catchInsect() {
    score++;
    scoreDisplay.innerHTML = `Score: ${score}`;
    this.remove();

    if (score === 20) {
        annoyedMessage.style.display = 'block';
    }

    setTimeout(spawnInsect, 500);
    setTimeout(spawnInsect, 500);
}
