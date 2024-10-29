"use strict";

const menuList = document.querySelector("#menuList");
console.log(menuList);

const menuBtn = document.querySelector("#menuButton");
console.log(menuBtn);



menuBtn.addEventListener('click',()=>{
    menuList.classList.toggle('hider');

    if(menuList.classList.contains("hider")){
         menuBtn.innerHTML=`<i class="bx bx-menu-alt-left"></i>`
    }else{
        menuBtn.innerHTML=`<i class="bx bx-x"></i>`;
    }; 
});