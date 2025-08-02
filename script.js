


// Test lien JS/HTML
alert('bonjour');

// Declaration des variables utiles 

    // Les boutons
        // start page
const allBtn = document.querySelectorAll('.btn');
const aLaCoqueBtn = document.querySelector('.a-la-coque-btn');
const molletBtn = document.querySelector('.mollet-btn');
const durBtn = document.querySelector('.dur-btn');
const pocheBtn = document.querySelector('.poche-btn');
        // Egg page
const playBtnALaCoque = document.querySelector('.play-btn-a-la-coque');
const stopBtnALaCoque = document.querySelector('.stop-btn-a-la-coque');
const restartBtnALaCoque = document.querySelector('.restart-btn-a-la-coque');

const playBtnMollet = document.querySelector('.play-btn-mollet');
const stopBtnMollet = document.querySelector('.stop-btn-mollet');
const restartBtnMollet = document.querySelector('.restart-btn-mollet');

const playBtnDur = document.querySelector('.play-btn-dur');
const stopBtnDur = document.querySelector('.stop-btn-dur');
const restartBtnDur = document.querySelector('.restart-btn-dur');

const playBtnPoche = document.querySelector('.play-btn-poche');
const stopBtnPoche = document.querySelector('.stop-btn-poche');
const restartBtnPoche = document.querySelector('.restart-btn-poche');

const backBtn = document.querySelectorAll('.back-btn');

    // les pages 
const startPage = document.querySelector('.start-page')
const aLaCoquePage = document.querySelector('.a-la-coque');
const molletPage = document.querySelector('.mollet');
const durPage = document.querySelector('.dur');
const pochePage = document.querySelector('.poche');

    // Les timer 
let timerALaCoque = document.querySelector('#timer-a-la-coque > span');
let timerMollet = document.querySelector('#timer-mollet');
let timerDur = document.querySelector('#timer-dur');
let timerPoche = document.querySelector('#timer-poche');

    // Autre
const thank = document.querySelector('.Thank')






// Changement de background des boutons au passage de la souris 
for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('mouseenter', 
        function () {
            console.log('hover');
            this.style.background = 'rgba(148, 92, 37, 1)';
        }
    )
};

for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('mouseleave', 
        function () {
            this.style.background = 'rgb(255, 210, 151)';
        }
    )
};


// Navigation depuis la start page selon la cuisson de l'oeufs

    //  A la coque 
aLaCoqueBtn.addEventListener('click', 
    function () {
        startPage.style.display = 'none';
        aLaCoquePage.style.display = 'flex'
    }
);

    //  mollet 
molletBtn.addEventListener('click', 
    function () {
        startPage.style.display = 'none';
        molletPage.style.display = 'flex'
    }
);

    //  dur 
durBtn.addEventListener('click', 
    function () {
        startPage.style.display = 'none';
        durPage.style.display = 'flex'
    }
);

    //  Poche 
pocheBtn.addEventListener('click', 
    function () {
        startPage.style.display = 'none';
        pochePage.style.display = 'flex'
    }
);


// Retour a la start page depuis le bouton backBtn / bouton home 
for (let i = 0; i < backBtn.length; i++){
    backBtn[i].addEventListener('click', 
        function () {
            startPage.style.display = 'flex';
            aLaCoquePage.style.display = 'none';
            molletPage.style.display = 'none';
            durPage.style.display = 'none';
            pochePage.style.display = 'none';
            clearInterval(timer);
        }
    )
};




// Mise en place du timer A la coque et de son activation au click du bouton play
let timer;
let temps = 180;
function decrementTime () {
    if (temps > 0) {
        timerALaCoque.textContent = temps;
        temps --;
    } else {
        alert('Les oeufs sont prets !');
        thank.style.display = 'flex';
        clearInterval(timer);
        temps = 180
    }
};



playBtnALaCoque.addEventListener('click', 
    function () {
        if (timerALaCoque.textContent === '180'){
            timer = setInterval(decrementTime, 1000);
        } else {
            clearInterval(timer);
        }
    }
);

restartBtnALaCoque.addEventListener('click',
    function () {
        if (temps !== 180) {
            clearInterval(timer);
            timerALaCoque.textContent = 180;
            temps = 180;
        }
    }
 );

 stopBtnALaCoque.addEventListener('click', 
    function () {
        clearInterval(timer);
    }
 );








;