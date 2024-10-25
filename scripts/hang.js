var random_word = "aaaa";
var human = ["head", "body", "left-hand", "right-hand", "left-leg", "right-leg"];
var part = 0;
var letters = document.querySelectorAll(".letter");
letters.forEach((letter) => {
    letter.addEventListener("click", (event) => {
        if (part < 6) {
            var clickedLetter = event.target.textContent;
            console.log(clickedLetter);
            event.target.classList.add("pressed");
            if (clickedLetter != random_word) {
                var img = document.createElement("img");
                img.src = `./assets/${human[part]}.svg`;
                document.getElementById("hang").appendChild(img);
                img.classList.add(`${human[part]}`);
                part++;
                console.log(part);
            }
        }
    });
});
