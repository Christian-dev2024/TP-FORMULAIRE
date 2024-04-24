//formulaire

let nom = document.querySelector('input#nom');
let prenoms = document.querySelector('input#prenoms');
let email = document.querySelector('input#email');
let age = document.querySelector('input#age');
let sexe =document.querySelector('input#sexe');

//retour de formulaire

let SpanNom = document.querySelector('span#nom');
let SpanPrenoms = document.querySelector('span#prenoms');
let SpanEmail = document.querySelector('span#email');
let SpanAge = document.querySelector('span#age');
let SpanSexe = document.querySelector('span#sexe');


nom?.addEventListener('keyup', (e)=> {
    SpanNom.innerHTML = e.target.value
}); 

prenoms?.addEventListener('keyup', (e)=> {
    SpanPrenoms.innerHTML = e.target.value
});

email?.addEventListener('keyup', (e)=>{
    SpanEmail.innerHTML = e.target.value
});

age?.addEventListener('keyup', (e)=>{
    SpanAge.innerHTML = e.target.value
});

sexe?.addEventListener('keyup', (e)=> {
    SpanSexe.innerHTML = e.target.value
});

//l'event KEYUP permet de recuperer les valeurs dans les champs lettres par lettre
// le '?' permet de verifier si la variable récuperée existe
//le 'e' permet de faire un retour de la valeur saisi sur la page
// le 'ADDEVENTLISTENER prens en compte deux paramètres