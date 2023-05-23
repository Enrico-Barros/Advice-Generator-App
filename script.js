const number = document.getElementById ('number_span');
const advice = document.getElementById ('advice');
const btn = document.getElementById ('button');

function GetAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then ((response) => {
        return response.json();
    })
    .then ((json) => {
        const advNum = json.slip.id;
        const adv = json.slip.advice;

        number.innerText = advNum;
        advice.innerText = adv;
    })
    .catch(error => {
        console.log(error);
    })
}

window.onload = () => {
    GetAdvice();
}

btn.addEventListener('click', () => {
    GetAdvice();
})