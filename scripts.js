function calcularLevel() {
  let heroName = document.querySelector("#hero-name");
  let levelHero = document.querySelector("#hero-level");
  let newLevelHero = Number(levelHero.value);
  let resultName = document.querySelector("div#resultN");
  let resultLevel = document.querySelector("div#resultL");
  resultName.innerHTML = `O nome do seu herói é <strong>${heroName.value}</strong>`;
  resultLevel.innerHTML = `O nível de XP do seu herói é <strong>${newLevelHero}</strong>`;
}
