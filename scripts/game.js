var random_word = ["MATH", "ENGLISH", "FACTS", "NUMBERS", "HISTORY"];
var random_nbr = Math.floor(Math.random() * 5);
var selectedWord = random_word[random_nbr];
var length = random_word[random_nbr].length;

console.log(length);
console.log(random_nbr);
console.log(random_word[random_nbr]);
var human = ["head", "body", "left-hand", "right-hand", "left-leg", "right-leg"];
var part = 0;
var letters = document.querySelectorAll(".letter");

var answer_section = document.getElementById("answer-section");
letters_got_right = Array(length).fill("-");
function upadteAnswers() {
    answer_section.textContent = letters_got_right.join(" ");
}
upadteAnswers();
letters.forEach((letter) => {
    letter.addEventListener("click", (event) => {
        if (part < 6) {
            var clickedLetter = event.target.textContent;
            console.log(clickedLetter);
            event.target.classList.add("pressed");
            if (selectedWord.includes(clickedLetter)) {
                for (var i = 0; i < length; i++) {
                    if (selectedWord[i] === clickedLetter) {
                        letters_got_right[i] = clickedLetter;
                    }
                }
                upadteAnswers();
            } else {
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
