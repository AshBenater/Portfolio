       // JS file for burger menu contact page
       
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