let body = document.querySelector("body"),
menuButton = document.querySelector(".menu__button"),
menuButtonClose = document.querySelector(".menu__button-close"),
menu = document.querySelector(".menu"),
menuBlock = document.querySelector(".menu__panel")
nav = document.querySelector("nav"),
contactsMain = document.querySelector(".contactsBlock"),
contacts = document.querySelector(".contacts"),
header = document.querySelector(".header"),
main = document.querySelector(".main");

window.addEventListener('resize', function() { //updating by width screen
  let width = window.innerWidth;
  if (width > 768) {   
    menuButton.classList.toggle("menu__button-close", false);  
    contacts.style.display="flex";
    contactsMain.append(contacts);
  }
  if (width < 768) {
    menuButton.classList.toggle("menu__button-close", false);
    contacts.style.display="block";
    nav.append(contacts);
  } 
});

document.onreadystatechange = () => {
  menuButton.onclick=function(e){
    e.preventDefault();
    menuButton.classList.toggle("active");
    menuButton.classList.toggle("menu__button-close");
    nav.style.display="block";
    nav.style.overflowY="scroll";
    nav.classList.toggle("nav__active");
    main.classList.toggle("main__active");
    body.classList.toggle("main__scroll");
  }
  menuButtonClose.onclick=function(e){
    e.preventDefault();
    menuButton.classList.toggle("active", false);
    menuButton.classList.toggle("menu__button-close", false);
    nav.style.display="none";
    nav.style.overflowY="hidden";
    nav.classList.toggle("nav__active", false);    
    main.classList.toggle("main__active", false);
    body.classList.toggle("main__scroll", false);
    
  }
};