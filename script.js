const btn = document.getElementById("openBtn");
const music = document.getElementById("music");

const text = `

Happy Birthday, Echaa Sayang ❤️

Hari ini bukan cuma hari ulang tahunmu.

Hari ini adalah hari dimana seseorang yang sangat berarti dalam hidupku dilahirkan ke dunia.

Terima kasih karena sudah hadir.

Terima kasih karena sudah menjadi bagian dari cerita, tawa, dan kenangan yang selama ini kita lalui bersama.

Setiap foto di website ini adalah pengingat bahwa aku beruntung pernah dan masih bisa berjalan bersamamu.

Aku tahu aku bukan orang yang sempurna.

Tapi satu hal yang selalu pasti:

Aku akan selalu berusaha membuatmu tersenyum.

Di umur yang baru ini, aku berharap semua impianmu tercapai, kesehatan selalu menyertaimu, dan kebahagiaan selalu menemukan jalannya menuju hatimu.

Tetaplah menjadi Echaa yang aku kenal.

Yang baik.
Yang kuat.
Yang manis.
Dan yang selalu berhasil membuat hariku terasa lebih berwarna.

Happy Birthday ❤️

I Love You.

`;

btn.onclick = () => {

    music.play().catch(() => {});

    document.querySelector(".letter").classList.remove("hidden");
    document.querySelector(".gallery").classList.remove("hidden");
    document.querySelector(".reasons").classList.remove("hidden");
    document.querySelector(".ending").classList.remove("hidden");

    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });

    let i = 0;

    const typing = () => {

        if (i < text.length) {

            document.getElementById("typing").innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, 25);
        }

    };

    typing();

    btn.style.display = "none";

    createHearts();

};

function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-20px";
        heart.style.fontSize = (Math.random() * 20 + 15) + "px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        let pos = -20;

        const fall = setInterval(() => {

            pos += 3;

            heart.style.top = pos + "px";

            if (pos > window.innerHeight) {

                clearInterval(fall);

                heart.remove();

            }

        }, 20);

    }, 500);

}
