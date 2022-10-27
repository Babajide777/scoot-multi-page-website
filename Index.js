var hamburger = document.querySelector('.hamburger');
var klose = document.querySelector('.klose')
var nav = document.querySelector('.btn-ul');
var linksUL = document.querySelectorAll('.links-ul li');
const klik = document.querySelector('.burger');




hamburger.addEventListener("click", () => {
  //Animation
  linksUL.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "  ";
    } else {
      link.style.animation = `navLinkFade 0.75s ease-in  forwards  ${index / 7 + 0.5}s`;
    }
  });
});


klik.addEventListener('click', function handleClick() {
  //toggle
  nav.classList.toggle('btn-active');

  //burger
  if (nav.style.visibility === '', hamburger.style.visibility === "hidden") {
    nav.style.visibility = 'hidden';
    hamburger.style.visibility = 'visible';
    klose.style.display = 'none';

   
  } else {
    nav.style.visibility = 'visible';
    hamburger.style.visibility = "hidden";
    hamburger.style.display = 'block';
    klose.style.display = 'block';
  } 
});



   