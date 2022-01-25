console.log('hello word');


// menu mobile open
const Hamburguer = document.querySelectorAll ('.iconhamburger')[0];
const Menu = document.querySelectorAll ('.menu')[0];

Hamburguer.addEventListener('click', function(){
    if (Menu.classList.contains('menuopen')){
        Menu.classList.remove('menuopen');
    }

    else{
        Menu.classList.add('menuopen');
    }
});


// Menu.addEventListener('click', function(){
//     if (Menu.classList.contains('menuopen')){
//         Menu.classList.remove('menuopen');
//     }

//     else{
//         Menu.classList.add('menuopen');
//     }
// });


window.addEventListener('click', function(e){
    console.log((e.target));
    if(e.target !== Hamburguer){
        Menu.classList.remove('menuopen');
    }

    else{
        
    }
    
})