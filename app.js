"use strict";

const menuList = document.querySelector("#menuList");
console.log(menuList);

const menuBtn = document.querySelector("#menuButton");
console.log(menuBtn);



menuBtn.addEventListener('click',()=>{
    menuList.classList.toggle('ml-[-100%]');

    if(menuList.classList.contains("ml-[-100%]")){
         menuBtn.innerHTML=`<i class="bx bx-menu-alt-left"></i>`
    }else{
        menuBtn.innerHTML=`<i class="bx bx-x"></i>`;
    }; 
});