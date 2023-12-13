//  let time1Btn = document.getElementById("time1");
// let time2Btn = document.getElementById("time2");
// let time3Btn = document.getElementById("time3");
// let time4Btn = document.getElementById("time4");
// let time5Btn = document.getElementById("time5");
// let chrono = document.getElementById("chrono")
// let hrs = document.getElementById("hrs");
// let min = document.getElementById("minutes");
// let sec = document.getElementById("seconds");

// let heures = 0;
// let minutes = 0;
// let secondes = 0;

// let timeout;

// let estArrete = true;

// const demarrer = () => {
//   if (estArrete) {
//     estArrete = false;
//     defilerTemps();
//   }
// };

// const arreter = () => {
//   if (!estArrete) {
//     estArrete = true;
//     clearTimeout(timeout);
//   }
// };

// const defilerTemps = () => {
//   if (estArrete) return;

//   secondes = parseInt(secondes);
//   minutes = parseInt(minutes);
//   heures = parseInt(heures);

//   secondes++;

//   if (secondes == 60) {
//     minutes++;
//     secondes = 0;
//   }

//   if (minutes == 60) {
//     heures++;
//     minutes = 0;
//   }

//   //   affichage
//   if (secondes < 10) {
//     secondes = "0" + secondes;
//   }

//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }

//   if (heures < 10) {
//     heures = "0" + heures;
//   }

//   chrono.textContent = `${heures}:${minutes}:${secondes}`;

//   timeout = setTimeout(defilerTemps, 1000);
// };

// const reset = () => {
//   chrono.textContent = "00:00:00";
//   estArrete = true;
//   heures = 0;
//   minutes = 0;
//   secondes = 0;
//   clearTimeout(timeout);
// };
// time1Btn.addEventListener("click", function(event) {
//     if (event.target.checked) {
//         secondes = "24"
//     }
// });

// time1Btn.addEventListener("click", arreter);
// time1Btn.addEventListener("click", reset);
// time1Btn.addEventListener("click", reset);
// time1Btn.addEventListener("click", reset);
// index.js

// index.js

// Function to start the countdown
// index.js
/// Récupération des éléments du DOM
// Récupération des éléments du DOM
// Récupération des éléments du DOM
// Récupération des éléments du DOM
let time1Btn = document.getElementById("time1");
let time2Btn = document.getElementById("time2");
let time3Btn = document.getElementById("time3");
let time4Btn = document.getElementById("time4");
let time5Btn = document.getElementById("time5");
let inputNumber = document.getElementById("inputnumber");
let timeElement = document.getElementById("time");
let chronoElement = document.getElementById("chrono");

// Variable pour suivre l'ID de l'intervalle du compte à rebours en cours
let currentIntervalId;

// Fonction pour démarrer le compte à rebours en secondes
function startCountdown(seconds) {
  // Arrêter le compte à rebours en cours s'il y en a un
  if (currentIntervalId) {
    clearInterval(currentIntervalId);
  }

  let tempsSeconds = seconds;

  const countdownInterval = setInterval(function () {
    const hours = Math.floor(tempsSeconds / 3600);
    const minutes = Math.floor((tempsSeconds % 3600) / 60);
    const seconds = tempsSeconds % 60;

    chronoElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (tempsSeconds === 0) {
      clearInterval(countdownInterval);
      timeElement.style.display = 'none';
    } else {
      tempsSeconds--;
    }
  }, 1000);

  // Enregistrer l'ID de l'intervalle actuel
  currentIntervalId = countdownInterval;

  timeElement.style.display = 'block';
}

// Écouteurs d'événements pour les boutons
time1Btn.addEventListener('click', function () {
  startCountdown(20);
});

time2Btn.addEventListener('click', function () {
  startCountdown(5 * 60);
});

time3Btn.addEventListener('click', function () {
  startCountdown(15 * 60);
});

time4Btn.addEventListener('click', function () {
  startCountdown(20 * 60);
});

time5Btn.addEventListener('click', function () {
  startCountdown(30 * 60);
});

// Écouteur d'événement pour le champ de saisie
inputNumber.addEventListener('keydown', function (event) {
  // Vérifier si la touche pressée est "Entrée"
  if (event.key === 'Enter') {
    const minutes = parseInt(inputNumber.value);
    if (!isNaN(minutes) && minutes > 0) {
      startCountdown(minutes * 60);
      inputNumber.value = '';
    }
  }
});

