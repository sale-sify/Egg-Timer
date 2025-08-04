


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
let tempsALaCoque = 180;
function decrementTimeALaCoque () {
    if (tempsALaCoque > 0) {
        timerALaCoque.textContent = tempsALaCoque;
        tempsALaCoque --;
    } else {
        alert('Les oeufs sont prets !');
        thank.style.display = 'flex';
        clearInterval(timer);
        tempsALaCoque = 180
    }
};



playBtnALaCoque.addEventListener('click', 
    function () {
        if (timerALaCoque.textContent === '180'){
            timer = setInterval(decrementTimeALaCoque, 1000);
        } else {
            clearInterval(timer);
        }
    }
);

restartBtnALaCoque.addEventListener('click',
    function () {
        if (tempsALaCoque !== 180) {
            clearInterval(timer);
            timerALaCoque.textContent = 180;
            tempsALaCoque = 180;
        }
    }
 );

 stopBtnALaCoque.addEventListener('click', 
    function () {
        clearInterval(timer);
    }
 );



 // Mise en place du timer Mollet et de son activation au click du bouton play

let tempsMollet = 360;
function decrementTimeMollet () {
    if (tempsMollet > 0) {
        timerMollet.textContent = tempsMollet;
        tempsMollet --;
    } else {
        alert('Les oeufs sont prets !');
        thank.style.display = 'flex';
        clearInterval(timer);
        tempsMollet = 360
    }
};



playBtnMollet.addEventListener('click', 
    function () {
        if (timerMollet.textContent === '180'){
            timer = setInterval(decrementTimeMollet, 1000);
        } else {
            clearInterval(timer);
        }
    }
);

restartBtnMollet.addEventListener('click',
    function () {
        if (tempsMollet !== 360) {
            clearInterval(timer);
            timerMollet.textContent = 360;
            tempsMollet = 360;
        }
    }
 );

 stopBtnMollet.addEventListener('click', 
    function () {
        clearInterval(timer);
    }
 );



// Mise en place du timer Dur et de son activation au click du bouton play

let tempsDur = 540;
function decrementTimeDur () {
    if (tempsDur > 0) {
        timerDur.textContent = tempsDur;
        tempsDur --;
    } else {
        alert('Les oeufs sont prets !');
        thank.style.display = 'flex';
        clearInterval(timer);
        tempsDur = 540
    }
};



playBtnDur.addEventListener('click', 
    function () {
        if (timerDur.textContent === '180'){
            timer = setInterval(decrementTimeDur, 1000);
        } else {
            clearInterval(timer);
        }
    }
);

restartBtnDur.addEventListener('click',
    function () {
        if (tempsDur !== 540) {
            clearInterval(timer);
            timerDur.textContent = 540;
            tempsDur = 540;
        }
    }
 );

 stopBtnDur.addEventListener('click', 
    function () {
        clearInterval(timer);
    }
 );


// Mise en place du timer Poche et de son activation au click du bouton play

let tempsPoche = 120;
function decrementTimePoche () {
    if (tempsPoche > 0) {
        timerPoche.textContent = tempsPoche;
        tempsPoche --;
    } else {
        alert('Les oeufs sont prets !');
        thank.style.display = 'flex';
        clearInterval(timer);
        tempsPoche = 120
    }
};



playBtnPoche.addEventListener('click', 
    function () {
        if (timerPoche.textContent === '180'){
            timer = setInterval(decrementTimePoche, 1000);
        } else {
            clearInterval(timer);
        }
    }
);

restartBtnPoche.addEventListener('click',
    function () {
        if (tempsPoche !== 120) {
            clearInterval(timer);
            timerPoche.textContent = 120;
            tempsPoche = 120;
        }
    }
 );

 stopBtnPoche.addEventListener('click', 
    function () {
        clearInterval(timer);
    }
 );



//  Et merci la Tchim !
 
