//////////////////////////////////////////////////////////////////////
/////////////////////////index.js/////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Definerer variabler for DOM elementer
const topbar = document.getElementById('topbar');

const Home = document.getElementById("home");

const Cafe = document.getElementById("cafe");

const Logo = document.getElementById("logo");

const booking = document.getElementById("booking");

const Topic = document.getElementById("topic");

const Code = document.getElementById("code");

//Bytter til index.html når Logoen klikkes på
Logo.addEventListener("click", function(event){
    window.location.href = "./index.html";
})

//////////////////////////////////////////////////////////////////////
/////////////////////////Onscroll function////////////////////////////
//////////////////////////////////////////////////////////////////////

//Forklares i kode-seksjonen på nettsiden

window.onscroll = function () { 
    
    if (document.documentElement.scrollTop >= 20 && window.innerWidth > 1040) {
        
        try{
            topbar.classList.add("endre_hoyde_for_scroll_topbar");

            Cafe.classList.add("endre_hoyde_for_scroll_a");

            Home.classList.add("endre_hoyde_for_scroll_a");

            booking.classList.add("endre_hoyde_for_scroll_a");

            Topic.classList.add("endre_hoyde_for_scroll_a");

            Code.classList.add("endre_hoyde_for_scroll_a");

            Logo.classList.add("endre_hoyde_for_scroll_logo");
        }
        catch(err){
            
        }
        
    } 
    else { 
        
        try{
            topbar.classList.remove("endre_hoyde_for_scroll_topbar");

            Cafe.classList.remove("endre_hoyde_for_scroll_a");

            Home.classList.remove("endre_hoyde_for_scroll_a");

            booking.classList.remove("endre_hoyde_for_scroll_a");
            
            Topic.classList.remove("endre_hoyde_for_scroll_a");

            Code.classList.remove("endre_hoyde_for_scroll_a");

            Logo.classList.remove("endre_hoyde_for_scroll_logo");
        }
        catch(err){
            
        }
        
    }
}