const container=document.querySelector(".hearts");

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*35)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

container.appendChild(heart);

setTimeout(()=>{
heart.remove();
},10000);

}

setInterval(createHeart,300);