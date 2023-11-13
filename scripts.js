function calcularLevel() {
  do {
    let heroName = document.querySelector("#hero-name");
    let levelHero = document.querySelector("#hero-level");
    let newLevelHero = Number(levelHero.value);
    let resultName = document.querySelector("div#result");
    let resImage = document.querySelector("#result-img");
    let resLevelHero = "";
    let imageHero = document.createElement("img");

    if (newLevelHero <= 1000) {
      resLevelHero = "Ferro";
      imageHero.setAttribute("src", "/images/heroi_junior.png");
      document.body.style.backgroundColor = "#5f5b63";
    } else if (newLevelHero > 1000 && newLevelHero <= 2000) {
      resLevelHero = "Bronze";
      imageHero.setAttribute("src", "/images/mini_heroina_escudo.png");
      document.body.style.backgroundColor = "#908074";
    } else if (newLevelHero > 2000 && newLevelHero <= 5000) {
      resLevelHero = "Prata";
      imageHero.setAttribute("src", "/images/mini_heroi.png");
      document.body.style.backgroundColor = "#cdcdcd";
    } else if (newLevelHero > 5000 && newLevelHero <= 7000) {
      resLevelHero = "Ouro";
      imageHero.setAttribute("src", "/images/heroi_top.png");
      document.body.style.backgroundColor = "#e7b02e";
    } else if (newLevelHero > 7000 && newLevelHero <= 8000) {
      resLevelHero = "Platina";
      imageHero.setAttribute("src", "/images/heroi_pleno.png");
      document.body.style.backgroundColor = "#a0b2c6";
    } else if (newLevelHero > 8000 && newLevelHero <= 9000) {
      resLevelHero = "Ascendente";
      imageHero.setAttribute("src", "/images/heroi_senior_pleno.png");
      document.body.style.backgroundColor = "#bbffff";
    } else if (newLevelHero > 9000 && newLevelHero <= 10000) {
      resLevelHero = "Imortal";
      imageHero.setAttribute("src", "/images/heroi_master.png");
      document.body.style.backgroundColor = "#eee0e5";
    } else if (newLevelHero > 10000) {
      resLevelHero = "Radiante";
      imageHero.setAttribute("src", "/images/heroina-ancia.png");
      document.body.style.backgroundColor = "#f0ddee";
    } else {
      resLevelHero = "[ERRO] Verifique o valor da XP informado!";
    }
    resultName.innerHTML = `O herói de nome <strong>${heroName.value}</strong> está no nível <strong>${resLevelHero}</strong>`;
    resultName.style.textAlign = "center";
    resImage.appendChild(imageHero);
    let restConfirm = document.querySelector("confirm-restart");
  } while (restConfirm.value === "S");
}
