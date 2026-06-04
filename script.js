const btn = document.getElementById("openBtn");

const music =
document.getElementById("music");

const text = `

Happy Birthday, Echaa Sayang ❤️

Hari ini dunia sedang merayakan seseorang yang sangat berarti bagiku.

Terima kasih karena sudah hadir dalam hidupku.

Terima kasih karena selalu ada,
selalu mendengarkan,
selalu menjadi alasan kenapa banyak hariku terasa lebih indah.

Aku bersyukur bisa mengenalmu.

Aku bersyukur bisa membuat kenangan bersamamu.

Dan aku bersyukur karena sampai hari ini,
aku masih bisa melihat senyum yang selalu aku sukai itu.

Semoga di umur yang baru ini,
kamu selalu sehat,
selalu bahagia,
dan semua impian yang kamu perjuangkan bisa menjadi kenyataan.

Tetaplah menjadi Echaa yang baik,
yang kuat,
dan yang selalu membuat dunia di sekitarnya terasa lebih hangat.

I Love You ❤️

`;

btn.onclick = () => {

music.play();

document
.querySelector(".letter")
.classList.remove("hidden");

document
.querySelector(".gallery")
.classList.remove("hidden");

document
.querySelector(".reasons")
.classList.remove("hidden");

document
.querySelector(".ending")
.classList.remove("hidden");

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});

let i=0;

function typing(){

if(i<text.length){

document
.getElementById("typing")
.innerHTML += text.charAt(i);

i++;

setTimeout(
typing,
35
);

}

}

typing();

btn.style.display="none";

}
