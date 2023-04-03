let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++
    if (counter > 4) {
        counter = 1;
    }
}, 5000)

const hamburger = document.querySelector('.hamburger');
const hamburger_icon = document.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');
const body = document.querySelector('body')

hamburger.addEventListener('click', () => {
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu' ? 'close' : 'menu';
    mobile_menu.classList.toggle('is-open');
    body.style.overflow= 'hidden'

})
mobile_menu.addEventListener('click', () => {
    mobile_menu.classList.remove('is-open')
    hamburger_icon.innerText = hamburger_icon.innerText === 'close' ? 'menu' : 'close' 
        body.style.overflow= ''

})
const image = document.querySelectorAll('.card');

image.forEach(function(card) {
   card.addEventListener('click', function() {
    image.classList.toggle("content-box")
}) 
})
