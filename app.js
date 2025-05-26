'use strict'
//manipulador de evento click

// REFERENCIA DO BOTAO
const switcher = document.querySelector('.btn');

//Adicionando ouvinte e manipulador
switcher.addEventListener('click', function(){
    document.body.classList.toggle("dark-theme")

    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    }
    else{
        this.textContent = "Light";
    }

    // adicionando chamada para console.log
    console.log('current class name: ' + className);

});
