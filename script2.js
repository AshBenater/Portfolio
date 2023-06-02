        let rangeButton = document.querySelector('.sliderContainer input[type="range"]');
        let header = document.querySelector("header");
        let myLogo = document.getElementById("logo");
        let footer = document.querySelector("footer");            
        let navLinks = document.querySelectorAll(".nav li a");
        let contact = document.getElementById("contact");
            
            
        function addColorToLink(event) {
    
            event.target.style.color = "hsl(194, 100%, 70%)";
        }

        function removeColorFromLink(event) {
    
            event.target.style.color ="hsl(0,0%,96%)";
        }
            
            
        let toggle = false;

        function colorChange() {
    
            if (toggle === false) {

                myLogo.src = "./Resources/Images/logo6-white.png";
                for (let i = 0; i < navLinks.length; i++) {
                    navLinks[i].style.color = "hsl(0,0%,96%)";
                }

                for (let i = 0; i < navLinks.length; i++) {
                    navLinks[i].addEventListener('mouseover',addColorToLink);
                    navLinks[i].addEventListener('mouseout',removeColorFromLink);  
                }

                contact.style.background = "hsl(223,24%,31%)";
                menuIcon.style.color = "hsl(0,0%,96%)";
                closeIcon.style.color = "hsl(0,0%,96%)";
                menu.style.background = "hsl(0,0%,5%)";

            } else {
        
                myLogo.src = "./Resources/Images/logo6.png";
                for (let i = 0; i < navLinks.length; i++) {
                    navLinks[i].style.color = "";
                }

                for (let i = 0; i < navLinks.length; i++) {
                    navLinks[i].removeEventListener('mouseover',addColorToLink);
                    navLinks[i].removeEventListener('mouseout',removeColorFromLink);
                } 

                contact.style.background = "";
                menuIcon.style.color = "";
                closeIcon.style.color = "";
                menu.style.background = "";
                    

            }
            
            toggle = !toggle;
        }

        const darkMode = () => {
            header.classList.toggle("light");
            document.body.classList.toggle("light");
            footer.classList.toggle("light");
         }

            rangeButton.addEventListener('click', colorChange);
            rangeButton.addEventListener('click', darkMode);

        // toggle for hamburger menu

        let menu = document.querySelector(".mobile-nav ul");
        let menuItems = document.querySelectorAll(".menu-item");
        let hamburger= document.querySelector(".hamburger");
        let closeIcon= document.querySelector(".closeIcon");
        let menuIcon = document.querySelector(".menuIcon");

        function toggleMenu() {

            if(menu.classList.contains("showMenu")) {
                menu.classList.remove("showMenu");
                closeIcon.style.display = "none";
                menuIcon.style.display = "block";
            } else {
                menu.classList.add("showMenu");
                menuIcon.style.display = "none";
                closeIcon.style.display = "block";
        }
        }
        hamburger.addEventListener("click", toggleMenu);
        // hiding the menu after a link is clicked 
        // using toggleMenu() because when you can click it means that the menu is showing
        menuItems.forEach( function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
        });
             
