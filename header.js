let toggleBtn = document.querySelector('#toggleBtn');
let menuList = document.querySelector('.menuBar_items');
let link = document.querySelector('.menuBar_link');

toggleBtn.addEventListener('click',clickFn);

function clickFn()
{
    menuList.classList.toggle('active');

}