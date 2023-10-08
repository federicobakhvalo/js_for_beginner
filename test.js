const game = document.getElementsByClassName("game")[0];

const btn = document.getElementById("btn-box");
for (let i = 0; i < 9; i++) {
  var unit = document.createElement("div");
  unit.className = "unit";
  unit.style.width = "247px";
  unit.style.height = "247px";
  unit.style.boxSizing = "border-box";
  unit.style.border = "3px solid orange";
  unit.style.background = "lightgrey";
  game.appendChild(unit);
}

btn.addEventListener("click", function () {
  game.style.display = "flex";
});

for (let i = 0; i < game.children.length; i++) {
  var catcher = 1;
  game.children[i].addEventListener("click", () => {
    if (game.children[i].hasAttribute("name")) {
      return; // Если есть атрибут 'name', то прерываем функцию, предотвращая внесение изменений.
    }

    if (catcher % 2 != 0) {
      game.children[
        i
      ].innerHTML = `<img src="figures/christ.png" height="200px" width="200px" style="display:block;margin:auto;margin-top:15px">`;
      game.children[i].setAttribute("name", "christ");
      game.children[i].setAttribute("data-position", i);
      game.children[i].setAttribute("data-step", catcher);
    } else {
      game.children[
        i
      ].innerHTML = `<img src="figures/circle.png" height="200px" width="200px" style="display:block;margin:auto;margin-top:15px">`;
      game.children[i].setAttribute("name", "circle");
      game.children[i].setAttribute("data-position", i);
      game.children[i].setAttribute("data-step", catcher);
    }
    console.log(who_did_win());
    catcher++;
  });
}

function who_did_win() {
  let all_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of all_combinations) {
    const [a, b, c] = combination;
    if (
      game.children[a].getAttribute("name") &&
      game.children[a].getAttribute("name") ===
        game.children[b].getAttribute("name") &&
      game.children[a].getAttribute("name") ===
        game.children[c].getAttribute("name")
    ) {
      alert(`Победу одержал  ${game.children[a].getAttribute("name")}`); // Победитель!
      var btn_end = document.createElement("div");
      btn_end.className = "game_over";
      btn_end.style.marginLeft = "1500px";
      btn_end.style.marginTop = "-800px";

      btn_end.innerHTML = `<a href="index.html"><button class=" btn btn-warning" style="font-size:42px;">Начать заново</button></a>`;

      document.body.appendChild(btn_end);
      break;
    }
  }

  for (let child of game.children) {
    if (!child.hasAttribute("name")) {
      return null; // Игра продолжается.
    }
  }
  alert("draw");
  var btn_end = document.createElement("div");
  btn_end.className = "game_over";
  btn_end.style.marginLeft = "1500px";
  btn_end.style.marginTop = "-800px";

  btn_end.innerHTML = `<a href="index.html"><button class=" btn btn-warning" style="font-size:42px;">Начать заново</button></a>`;

  document.body.appendChild(btn_end);
}
