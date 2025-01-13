let btn = document.querySelector('.btn');
let okbtn = document.querySelector('.okbtn');
let open_popup = document.querySelector('.popup');
btn.addEventListener('click',()=>{
    open_popup.classList.add('open-popup');

});
okbtn.addEventListener('click',()=>{
    open_popup.classList.remove('open-popup');

})