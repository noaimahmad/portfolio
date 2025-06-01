let image = document.querySelector(".image");
let picture = document.querySelector(".picture");
let btn = document.querySelector(".btn");
let para = document.querySelector(".paragraph");
let about = document.querySelector(".about");
let active = document.querySelector(".active");


let changeMode = document
  .querySelector(".changeMode")
  .addEventListener("click", function () {
    image.classList.add("animate");

    setTimeout(() => {
      image.classList.remove("animate");
    }, 10000);
  });

picture.addEventListener("click", () =>{
    image.src = "next4.JPG";

    setTimeout(() => {
        image.src = "next2.JPG";
        image.src = "next3.JPG";
        image.src = "next1.JPG";
        image.src = "next.JPG";
      }, 1000);

})

function test() {
    btn.addEventListener("click", () => {
        para.innerHTML = "I am the Student of Syed Jamaluddin Afghani University";
        para.style.classList.add("rotate");
        setTimeout(() => {
         
            para.innerHTML = "I am an Web Developer";
           
            para.innerHTML = "Now I am working in JavaScript";
        }, 2050);
        para.innerHTML = "I am intersted in C++ and JavaScript";
    
    
    
        setTimeout(() => {
         
            para.innerHTML = "I am an Web Developer";
           
        }, 1050);
    });
}



about.addEventListener("click", () =>{
   
        para.innerHTML = "I am the Student of Syed Jamaluddin Afghani University";
     
        setTimeout(() => {
         
            para.innerHTML = "I am an Web Developer";
           
            para.innerHTML = "Now I am working in JavaScript";
        }, 2050);
        para.innerHTML = "I am intersted in C++ and JavaScript";
    
    
    
        setTimeout(() => {
         
            para.innerHTML = "I am an Web Developer";
           
        }, 1050);
        
   
})

test();
var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
   
 

    if(document.body.classList.contains("dark-theme")){
        icon.src = "mist.png";
    }else{
        icon.src = "clear.png";
    }
}

