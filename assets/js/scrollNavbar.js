var nav = document.getElementById("scroll-nav");
        var buttonUp = document.getElementById("buttonUp");
        var itemNav = document.getElementsByClassName("link");
        function firstScript(){
            for(let i = 0; i<6; i++){
                    itemNav[i].classList.remove("text-primary");
                    itemNav[i].classList.add("text-white");
                }
        }
        document.getElementById("toggle-button").addEventListener("click", myFunction);
        function myFunction(){
            if(nav.classList.add("bg-white")){
                nav.classList.remove("bg-white");
                for(let i = 0; i<6; i++){
                    itemNav[i].classList.remove("text-primary");
                    itemNav[i].classList.add("text-white");
                }
            }
            else{
                nav.classList.add("bg-white");
                for(let i = 0; i<6; i++){
                    itemNav[i].classList.add("text-primary");
                    itemNav[i].classList.remove("text-white");
                }
            }
        }
        window.onscroll = function(){
            if(window.pageYOffset >0){
                for(let i = 0; i<6; i++){
                    itemNav[i].classList.add("text-primary");
                    itemNav[i].classList.remove("text-white");
                }
                nav.style.transition="all 1s";
                nav.classList.add("bg-white");
                buttonUp.classList.remove("d-none");
            }
            else{
                nav.classList.remove("bg-white");
                buttonUp.classList.add("d-none");
                for(let i = 0; i<6; i++){
                    itemNav[i].classList.remove("text-primary");
                    itemNav[i].classList.add("text-white");
                }
                
            }
        }