// Original emojis
const emojis = ["😀", "🖕", "😂", "😡", "😲", "❤️", "😎", "🐶", "🤓", "🔥", "👀", "🍦"];

// Double the emojis for matching pairs
const doubledEmojis = [...emojis, ...emojis];

const shuffledEmojis = doubledEmojis.sort(() => (Math.random() > .5) ? 2 : -1);
for (let i = 0; i < shuffledEmojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffledEmojis[i];

    box.onclick = function() {
        this.classList.add('boxOpen');

        setTimeout(function() {
            let openBoxes = document.querySelectorAll('.boxOpen');

            if (openBoxes.length > 1) {
                if(openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
                    openBoxes[0].classList.add('boxMatch');
                    openBoxes[1].classList.add('boxMatch');
                    openBoxes[0].classList.remove('boxOpen');
                    openBoxes[1].classList.remove('boxOpen');

                    if(document.querySelectorAll('.boxMatch').length === doubledEmojis.length) {
                        alert('WIN');
                    }

                } else {
                    openBoxes[0].classList.remove('boxOpen');
                    openBoxes[1].classList.remove('boxOpen');
                }
            }
        }, 500);
    }

    document.querySelector('.game').appendChild(box);
 }
