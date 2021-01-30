document.querySelector(".bars").addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
})

document.querySelector(".details-friends").addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu-friends");
})

 document.querySelector(".close-friends").addEventListener("click", function(){
     document.querySelector(".container").classList.toggle("show-menu-friends");
})

document.querySelector(".details-brooklyn-nine-nine").addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu-brooklyn");
})

document.querySelector(".close-brooklyn").addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu-brooklyn");
})