const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
    '#212850',
    '#2c2c2c',
    '#111111',
    'salmon',
    'aqua',
];

const min = 0;
const max = colors.length - 1;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');

let intervalId = null;

startBtn.addEventListener('click', () => {
    if (intervalId === null)
        intervalId = setInterval(() => {
            {
                const currentColor =
                colors[randomIntegerFromInterval(min, max)];
                console.log(randomIntegerFromInterval(min, max));
                console.log(currentColor);
                changeBackground(currentColor);
            }
        }, 1000);
});

function changeBackground(color) {
    document.body.style.background = color;
}

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
});
