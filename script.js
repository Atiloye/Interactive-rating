// Script for switching event displays after clicking the button
const submitButton = document.querySelector('.button button');
const beforeSubmit = document.querySelector('.before-submit');
const afterSubmit = document.querySelector('.after-submit');

submitButton.addEventListener('click', () => {
    beforeSubmit.style.display = 'none';
    afterSubmit.style.display = 'block';
});


// Assigning Variables

const buttons = document.querySelectorAll('.ratings div');
const thankYou = document.getElementById('selectText');

buttons.forEach(element => {
    element.addEventListener('click', () => {
        for(i=0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
        }
        element.classList.toggle('active');
        thankYou.innerText = `You selected ${element.innerText} out of ${buttons.length++}.`;
    })
});

const ratingDivs = document.querySelectorAll('.ratings div');

ratingDivs.forEach(div => {
    div.addEventListener('click', () => {
        ratingDivs.forEach(otherDiv => {
        ratingsDiv.style.backgroundColor = 'hsl(25, 97%, 53%)';
        });
        div.classList.add('active');
    });
});
