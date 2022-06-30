let call = document.querySelector('.callMe');
let popUp = document.querySelector('.popUp');
let wrapp = document.querySelector('.wrapper');
let btnSent = document.querySelector('.btnSent');
let lab = document.querySelector('.checkBoxPopUp');
let pop = document.getElementById("checkbox");
let burger = document.querySelector('.burger')
let navHeader = document.querySelector('.nav')


burger.addEventListener('click', () => {
    burger.innerHTML = 'X'
    navHeader.classList.remove('mobile')
})


call.addEventListener('click', () => {
    popUp.classList.add('popUp-active');
    wrapp.classList.add('active-wrapper');

    let btn = document.querySelector('.closePopUp')
    btn.addEventListener('click', () => {
        popUp.classList.remove('popUp-active');
        wrapp.classList.remove('active-wrapper')
    })
})
