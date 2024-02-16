const wrp = document.querySelector('.wrapper');
const ques = document.querySelector('.ques h2');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const wrpRect = wrp.getBoundingClientRect();
const norect = no.getBoundingClientRect();
yes.addEventListener('click',()=>{
    ques.textContent= 'Chalo phir date par'
    document.body.style.backgroundImage = "url('bg2.png')";
})
no.addEventListener('mouseover',()=>{
    const i =Math.floor(Math.random()*(wrpRect.width - norect.width))+1;
    const j =Math.floor(Math.random()*(wrpRect.height - norect.height))+1;
    no.style.left = i + 'px';
    no.style.top = j + 'px';
})