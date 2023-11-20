addEventListener("DOMContentLoaded", function () {
  const cardsNunmber = 16;
  const game = document.getElementById("game");
  const btn = document.getElementById("new-game-btn");

  function newGame() {
    game.innerHTML = '';
    btn.setAttribute('disabled', '')
    let arr = generatePairedNumbers(cardsNunmber);
    arr = shuffle(arr)
    createCards(arr)
  }

  function generatePairedNumbers(couplesNumber) {
    let arr = [...Array(couplesNumber / 2)].map((_, i) => i + 1);
    return arr.concat(arr).sort();
  }

  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

  function createCards(arr) {
    for (number of arr) {
      let card = document.createElement("div");
      let cardText = document.createElement("p");

      card.classList.add("game__card", "game__card--hidden");
      card.id = `card-${number}`;

      cardText.classList.add('card__paragraph');
      cardText.textContent = number;

      card.append(cardText)

      let isWin = function(cards) {
        if(!cards.some((el) => el.classList.contains('game__card--hidden'))) {
          btn.removeAttribute("disabled");
        }
      }

      card.addEventListener("click", function () {
        let cards = Array.from(game.getElementsByClassName("game__card"));

        if(cards.reduce((openedCount, el) => openedCount + (el.classList.contains("game__card--open") ? 1: 0), 0) >= 2) return;

        card.classList.toggle("game__card--hidden");
        card.classList.toggle("game__card--open");

        cards.forEach((element) => {
          if (element.classList.contains("game__card--hidden") ||
              element.classList.contains("game__card--found") ||
              element === card) return;
            
          if(element.textContent !== card.textContent) {
            setTimeout(() => {
              element.classList.add("game__card--hidden");
              card.classList.add("game__card--hidden");
              element.classList.remove("game__card--open");
              card.classList.remove("game__card--open");
            }, 250);
            return;
          }

          element.classList.add("game__card--found");
          card.classList.add("game__card--found");

          element.classList.remove("game__card--open");
          card.classList.remove("game__card--open");

          element.replaceWith(element.cloneNode(true));
          card.replaceWith(card.cloneNode(true))

          setTimeout(() => {
            isWin(cards)
          }, 1);
        });
      });

      game.append(card);
    }
  }

  btn.addEventListener('click', function() { newGame() });

  newGame();
});
