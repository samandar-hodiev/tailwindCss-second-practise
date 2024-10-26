"use strict";

const menuList = document.querySelector("#menuList");
console.log(menuList);

const menuBtn = document.querySelector("#menuButton");
console.log(menuBtn);



menuBtn.addEventListener('click',()=>{
    menuList.classList.toggle('translate-x-[-1000%]');

    if(menuList.classList.contains("translate-x-[-1000%]")){
         menuBtn.innerHTML=`<i class="bx bx-menu-alt-left"></i>`
    }else{
        menuBtn.innerHTML=`<i class="bx bx-x"></i>`;
    }; 
});