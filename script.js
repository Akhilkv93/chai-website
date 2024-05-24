var i = 0;
var txt = 'A comforting cup of tea makes everything better'; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */
let quote= document.querySelector(".quote-text")
document.addEventListener("DOMContentLoaded",()=>{
   animation()
       
})

function animation(){
    if (i < txt.length) {
        quote.innerHTML += txt.charAt(i);
        i++;
        setTimeout(animation, speed);
    }
}

