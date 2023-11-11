function calcularLevel() {
  let heroName = document.querySelector("#hero-name");
  let levelHero = document.querySelector("#hero-level");
  let newLevelHero = Number(levelHero.value);
  let resultName = document.querySelector("div#resultN");
  let resultLevel = document.querySelector("div#resultL");
  let resLevelHero = "";
  //!resultLevel.innerHTML = `O nível de XP do seu herói é <strong>${newLevelHero}</strong>`;
  if (newLevelHero <= 1000) {
    resLevelHero = "Ferro";
  } else if (newLevelHero > 1000 && newLevelHero <= 2000) {
    resLevelHero = "Bronze";
  } else if (newLevelHero > 2000 && newLevelHero <= 5000) {
    resLevelHero = "Prata";
  } else if (newLevelHero > 5000 && newLevelHero <= 7000) {
    resLevelHero = "Ouro";
  } else if (newLevelHero > 7000 && newLevelHero <= 8000) {
    resLevelHero = "Platina";
  } else if (newLevelHero > 8000 && newLevelHero <= 9000) {
    resLevelHero = "Ascendente";
  } else if (newLevelHero > 9000 && newLevelHero <= 10000) {
    resLevelHero = "Imortal";
  } else if (newLevelHero > 10000) {
    resLevelHero = "Radiante";
  } else {
    resLevelHero = "[ERRO] Verifique o valor da XP informado!";
  }
  resultName.innerHTML = `O herói de nome <strong>${heroName.value}</strong> está no nível <strong>${resLevelHero}</strong>`;
}
