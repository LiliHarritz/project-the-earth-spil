window.addEventListener("load", showTitle);

// deklarerer variablerne point og tid
let point=0;
let liv=3;

// deklarerer constanterne alienufo1 og meteor1
const alienufo1 = document.querySelector("#alienufo1_container");
const alienufo2 = document.querySelector("#alienufo2_container");
const alienufo3 = document.querySelector("#alienufo3_container");
const meteor1 = document.querySelector("#meteor1_container");
const meteor2 = document.querySelector("#meteor2_container");
const meteor3 = document.querySelector("#meteor3_container");
const hjerte = document.querySelector("#hjerte_container");


function showTitle() {
  console.log("showTitle");

  // Skjuler alle skærme
  hideAllScreens();

  // Viser titelskærm
  document.querySelector("#start").classList.remove("hide");

  // Når man klikker på knappen så går man til startGame
  document.querySelector("#play").addEventListener("click", startGame);
}

function startGame() {
  console.log("startGame");

  // Skjuler alle skærme
  hideAllScreens();

  // nulstiller liv og point (sætter til startværdien)
  point = 0;
  liv = 3;

  // opdaterer point på htmlsiden
  document.querySelector("#mine_points").textContent = point;
  document.querySelector("#mine_liv").textContent = liv;

  // starter timer
  document.querySelector("#tid").classList.add("timer");

  // går til endGame når tiden er gået (når timer-animationen er færdig)
  document.querySelector("#tid").addEventListener("animationend", endGame);



//Start animation hjerte
hjerte.classList.add("flyvhjerte");

// Tilføjer random positions og speed
rnd = generateRandomNumber(13);
hjerte.classList.add("pos" + rnd);

// lytter efter klik på alienufo, gå til funktionen clickalienufo hvis der klikkes
hjerte.addEventListener("mousedown", clickalienufo);

// når alienufo har hoppet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
hjerte.addEventListener("animationiteration", resethjerte);



  // starter fly-animation på alienufo
  alienufo1.classList.add("flyAlien");
  alienufo2.classList.add("flyAlien");
  alienufo3.classList.add("flyAlien");

  //Random speed, positions og tid delay
rnd = generateRandomNumber(13);
alienufo1.classList.add("pos" + rnd);
rnd = generateRandomNumber(3);
alienufo1.classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
alienufo1.classList.add("delay" + rnd);
alienufo1.addEventListener("animationiteration",mistLivalien);

rnd = generateRandomNumber(13);
alienufo2.classList.add("pos" + rnd);
rnd = generateRandomNumber(3);
alienufo2.classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
alienufo2.classList.add("delay" + rnd);
alienufo2.addEventListener("animationiteration",mistLivalien);

rnd = generateRandomNumber(13);
alienufo3.classList.add("pos" + rnd);
rnd = generateRandomNumber(3);
alienufo3.classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
alienufo3.classList.add("delay" + rnd);
alienufo3.addEventListener("animationiteration",mistLivalien);

// lytter efter klik på alienufo, gå til funktionen clickalienufo hvis der klikkes
alienufo1.addEventListener("mousedown", clickalienufo);
alienufo2.addEventListener("mousedown", clickalienufo);
alienufo3.addEventListener("mousedown", clickalienufo);

// når alienufo har hoppet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
alienufo1.addEventListener("animationiteration", resetalienufo);
alienufo2.addEventListener("animationiteration", resetalienufo);
alienufo3.addEventListener("animationiteration", resetalienufo);



// starter falde-animation på meteor
meteor1.classList.add("flyMeteor1");
meteor2.classList.add("flyMeteor1");
meteor3.classList.add("flyMeteor1");

//Random speed, positions og tid delay
rnd = generateRandomNumber(13);
meteor1.classList.add("pos" + rnd);
rnd = generateRandomNumber(3);
meteor1.classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
meteor1.classList.add("delay" + rnd);
meteor1.addEventListener("animationiteration",mistLivmeteor);

rnd = generateRandomNumber(13);
meteor2.classList.add("pos" + rnd);
rnd = generateRandomNumber(3);
meteor2.classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
meteor2.classList.add("delay" + rnd);
meteor2.addEventListener("animationiteration",mistLivmeteor);

rnd = generateRandomNumber(13);
meteor3.classList.add("pos" + rnd);
rnd = generateRandomNumber(3);
meteor3.classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
meteor3.classList.add("delay" + rnd);
meteor3.addEventListener("animationiteration",mistLivmeteor);

  // lytter efter klik på meteor1, gå til funktionen clickmeteor1 hvis der klikkes
  meteor1.addEventListener("mousedown", clickmeteor);
  meteor2.addEventListener("mousedown", clickmeteor);
  meteor3.addEventListener("mousedown", clickmeteor);

  // når meteor1 har hoppet 1 gang, skal den dukke op et nyt sted (gå til reset funktionen)
  meteor1.addEventListener("animationiteration", resetmeteor);
  meteor2.addEventListener("animationiteration", resetmeteor);
  meteor3.addEventListener("animationiteration", resetmeteor);
}


function clickalienufo() {
  console.log("clickalienufo");

  // stopper med at lytte efter klik (fjerner eventlistener)
  this.removeEventListener("mousedown", clickalienufo);

  // afspiller alienufo lyd

  // Tæller op på point og liv (kan også skrives: point++;)
  point = point + 1;

  // Skriver point ud (vis nyt pointtal på siden)
  document.querySelector("#mine_points").textContent = point;

  // Stopper hoppe-animation på container (sæt på pause ved at tilføje klassen frys)
  this.classList.add("frys");

  // Starter forsvind-animation på sprite
  this.firstElementChild.classList.add("forsvind");

  // Går til reset funktionen når forsvind-animationen er færdig
  this.addEventListener("animationend", resetalienufo);
}

function mistLivalien() {
liv=liv-1;
document.querySelector("#mine_liv").textContent = liv;
if(liv<1) {
  endGame();
}
//fjerner alle klasser fra alienufo1's container (hop, frys og pos)
this.classList = "";
//fjerner alle klasser fra alienufo1's sprite (forsvind)
this.firstElementChild.classList = "";

// gør det muligt at sætte hoppeanimationen på igen med det samme
this.offsetHeight;
// genstarter hoppe-animation (hoppeanimation sættes på igen)
this.classList.add("flyAlien");

// ny random position til svampen
let rnd = generateRandomNumber(13);
this.classList.add("pos" + rnd);
// ny random speed
rnd = generateRandomNumber(3);
this.classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
this.classList.add("delay" + rnd);

// lytter efter klik på this, går til funktionen clicalienufo hvis der klikkes
this.addEventListener("mousedown", clickalienufo);
}

function resetalienufo() {
  console.log("alienufoReset");
  console.log(this);

  //fjerner alle klasser fra alienufo1's container (hop, frys og pos)
  this.classList = "";
  //fjerner alle klasser fra alienufo1's sprite (forsvind)
  this.firstElementChild.classList = "";

  // gør det muligt at sætte hoppeanimationen på igen med det samme
  this.offsetHeight;
  // genstarter hoppe-animation (hoppeanimation sættes på igen)
  this.classList.add("flyAlien");

  // ny random position til svampen
  let rnd = generateRandomNumber(13);
this.classList.add("pos" + rnd);
  // ny random speed
  rnd = generateRandomNumber(3);
this.classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
this.classList.add("delay" + rnd);

  // lytter efter klik på this, går til funktionen clicalienufo hvis der klikkes
this.addEventListener("mousedown", clickalienufo);
}


function clickmeteor() {
  console.log("clickmeteor");
  console.log(this);

  // stopper med at lytte efter klik (fjerner eventlistener)
  this.removeEventListener("mousedown", clickmeteor);

  // afspiller this lyd

  // Tæller ned på liv (kan også skrives: liv--;)
  point = point + 1;

  // Viser opdateret antal point på siden
document.querySelector("#mine_points").textContent = point;


// Stopper hoppe-animation på container (sæt på pause ved at tilføje klassen frys)
this.classList.add("frys");

// Starter forsvind-animation på sprite
this.firstElementChild.classList.add("forsvind");

// Går til reset funktionen når forsvind-animationen er færdig
this.addEventListener("animationend", resetmeteor);
}

function mistLivmeteor() {
  liv=liv-1;
  document.querySelector("#mine_liv").textContent = liv;
  if(liv<1) {
    endGame();
  }
      //fjerner alle klasser fra alienufos container (hop, frys og pos)
this.classList = "";
//fjerner alle klasser fra alienufos sprite (forsvind)
this.firstElementChild.classList = "";

// gør det muligt at sætte hoppeanimationen på igen med det samme
this.offsetHeight;
// genstarter hoppe-animation (hoppeanimation sættes på igen)
this.classList.add("flyMeteor1");

// Giver containeren en ny random position/speed/delay
let rnd = generateRandomNumber(13);
this.classList.add("pos" + rnd);
// Ny random speed
rnd = generateRandomNumber(3);
this.classList.add("speed" + rnd);
rnd = generateRandomNumber(4);
this.classList.add("delay" + rnd);

// lytter efter klik på alienufo1, gå til funktionen clicalienufo hvis der klikkes
this.addEventListener("mousedown", clickmeteor);
}

function resetmeteor() {
  console.log("meteorreset");
  
  //fjerner alle klasser fra alienufos container (hop, frys og pos)
this.classList = "";
  //fjerner alle klasser fra alienufos sprite (forsvind)
this.firstElementChild.classList = "";

  // gør det muligt at sætte hoppeanimationen på igen med det samme
  this.offsetHeight;
  // genstarter hoppe-animation (hoppeanimation sættes på igen)
  this.classList.add("flyMeteor1");

  // Giver containeren en ny random position/speed/delay
  let rnd = generateRandomNumber(13);
  this.classList.add("pos" + rnd);
  // Ny random speed
  rnd = generateRandomNumber(3);
  this.classList.add("speed" + rnd);
  rnd = generateRandomNumber(4);
  this.classList.add("delay" + rnd);

  // lytter efter klik på alienufo1, gå til funktionen clicalienufo hvis der klikkes
this.addEventListener("mousedown", clickmeteor);
}

function clickhjerte() {
  console.log("clickhjerte");

  // stopper med at lytte efter klik (fjerner eventlistener)
  this.removeEventListener("mousedown", clickhjerte);

  // afspiller alienufo lyd

  // Tæller op på point og liv (kan også skrives: point++;)
  liv = liv + 1;

  // Skriver point ud (vis nyt pointtal på siden)
  document.querySelector("#mine_liv").textContent = point;

  // Stopper hoppe-animation på container (sæt på pause ved at tilføje klassen frys)
  this.classList.add("frys");

  // Starter forsvind-animation på sprite
  this.firstElementChild.classList.add("forsvind");

  // Går til reset funktionen når forsvind-animationen er færdig
  this.addEventListener("animationend", resethjerte);
}

function resethjerte() {
  console.log("hjerte");

  //fjerner alle klasser fra alienufo1's container (hop, frys og pos)
  this.classList = "";
  //fjerner alle klasser fra alienufo1's sprite (forsvind)
  this.firstElementChild.classList = "";

  // gør det muligt at sætte hoppeanimationen på igen med det samme
  this.offsetHeight;
  // genstarter hoppe-animation (hoppeanimation sættes på igen)
  this.classList.add("flyvhjerte");

  // ny random position til svampen
  let rnd = generateRandomNumber(13);
this.classList.add("pos" + rnd);

  // lytter efter klik på this, går til funktionen clicalienufo hvis der klikkes
this.addEventListener("mousedown", clickhjerte);
}

function endGame() {
  console.log("endGame");

  if (liv <= 0) {
    gameOver();
  } else if (point >= 20) {
    levelComplete();
  } else {
    gameOver();
  }

  // stop timer og fjern eventlistener
  document.querySelector("#tid").classList.remove("timer");

  // går til endGame når tiden er gået (når timer-animationen er færdig)
  document.querySelector("#tid").removeEventListener("animationend", endGame);

  // Fjerner alle eventlistnere fra elementerne
  alienufo1.removeEventListener("animationend", resetalienufo);
  alienufo1.removeEventListener("animationiteration", resetalienufo);
  alienufo1.removeEventListener("mousedown", clickalienufo);

  meteor1.removeEventListener("mousedown", clickmeteor);
  meteor1.removeEventListener("animationend", resetmeteor);
  meteor1.removeEventListener("animationiteration", resetmeteor);

  alienufo2.removeEventListener("animationend", resetalienufo);
  alienufo2.removeEventListener("animationiteration", resetalienufo);
  alienufo2.removeEventListener("mousedown", clickalienufo);

  meteor2.removeEventListener("mousedown", clickmeteor);
  meteor2.removeEventListener("animationend", resetmeteor);
  meteor2.removeEventListener("animationiteration", resetmeteor);

  alienufo3.removeEventListener("animationend", resetalienufo);
  alienufo3.removeEventListener("animationiteration", resetalienufo);
  alienufo3.removeEventListener("mousedown", clickalienufo);

  meteor3.removeEventListener("mousedown", clickmeteor);
  meteor3.removeEventListener("animationend", resetmeteor);
  meteor3.removeEventListener("animationiteration", resetmeteor);

  hjerte.removeEventListener("mousedown", clickmeteor);
  hjerte.removeEventListener("animationend", resetmeteor);
  hjerte.removeEventListener("animationiteration", resetmeteor);
  

  // Fjerner alle klasser fra elementerne
  alienufo1.classList = "";
  document.querySelector("#alienufo_sprite").classList = "";
  alienufo2.classList = "";
  document.querySelector("#alienufo_sprite").classList = "";
  alienufo3.classList = "";
  document.querySelector("#alienufo_sprite").classList = "";
  meteor1.classList = "";
  document.querySelector("#meteor1_sprite").classList = "";
  meteor2.classList = "";
  document.querySelector("#meteor1_sprite").classList = "";
  meteor3.classList = "";
  document.querySelector("#meteor1_sprite").classList = "";
  hjerte.classList="";
}

function gameOver() {
  console.log("gameOver");

  // skjuler alle skærme
  hideAllScreens();

  // viser gameover skærm
  document.querySelector("#game_over").classList.remove("hide");

  // når der klikkes på knappen spil-igen går vi til startGame
  document.querySelector("#playagain1").addEventListener("click", startGame);
}

function levelComplete() {
  console.log("levelComplete");

  // skjuler alle skærme
  hideAllScreens();

  // viser levelcomplete skærm
  document.querySelector("#level_complete").classList.remove("hide");

  // når der klikkes på knappen spil-igen går vi til startGame
  document.querySelector("#playagain2").addEventListener("click", startGame);
}

function generateRandomNumber(num) {
  let rndNumber = Math.random();
  rndNumber = rndNumber * num;
  rndNumber = Math.floor(rndNumber);
  rndNumber = rndNumber + 1;

  return rndNumber;

  // return Math.floor(Math.random()*num)+1;
}

function hideAllScreens() {
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
}
