var btn = document.getElementById("btn-menu");
var body = document.querySelector("section-one");
var menu = document.getElementById("menu");
var men = document.getElementById("men-res");
var item = document.querySelector(".nav-link");
var count = 0;

btn.addEventListener('click',function(){
    
console.clear();
    count++;
    if(count % 2 == 0) {
        console.log("no visible");
        men.style.display = "none";
    }
    else {
        console.log("visible");
        men.style.display = "inline";
        item.addEventListener('click', function() {
            console.log("Click link");
        })

    }
});


function iniciarMap(){
    var coord = {lat:-32.9485081 ,lng: -60.6712533};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}

window.addEventListener('scroll', function() {
    let scroll = Math.floor(document.documentElement.scrollTop);
    console.log(scroll);
    if(scroll < 150) {
        console.log("menor");
        menu.classList.remove("bg-light");
        menu.style.height = "80px";
    }
    else {
        console.log("mayor");
        menu.classList.add("bg-light");
        menu.style.height = "50px";
    }
})