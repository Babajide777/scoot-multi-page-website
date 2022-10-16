var hamburger = document.querySelector('.hamburger');
var close = document.querySelector('.close')
var nav = document.querySelector('.links-ul');
var linksUL = document.querySelectorAll('.links-ul li');




    hamburger.addEventListener('click', () => {
        //Animation
        linksUL.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = `navLinkFade 0.75s ease forwards ${index / 7 + 0.5}s`
            }
        });
    });