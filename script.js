const message = document.querySelector("#message");
message.style.color = 'goldenrod';
const text = document.querySelector("#text");
const button = document.querySelector('#empezar');
const resultado = document.querySelector('#resultado');



let startTime, endTime, mensaje;


document.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        console.log(this);
               if (button.innerText == "Empezar") {
            text.disabled = false;
            evaluar()
        } else if (button.innerText == "Acabar") {
            final();
            text.disabled = false;
            button.innerText = "Empezar"
        }

    }
})


button.addEventListener('click', function () {
    if (this.innerText == "Empezar") {
        text.disabled = false;
        evaluar()
    } else if (this.innerText == "Acabar") {
        final();
        text.disabled = false;
        this.innerText = "Empezar"
    }
});



function evaluar() {
    
    startTime = new Date().getTime();
    text.focus();
    button.innerText = "Acabar"
    const frases = ["Gana, y bien, el Betis a la Real Sociedad tras una primera parte muy trabajada", "Borja Iglesias hizo el primero con un fuerte cabezazo", "Joaquín, tras un error de Guevara en campo propio, marcó a placer el segundo", "Lo han merecido los de Rubi, que han dominado a un rival que se ha ido haciendo pequeño con el paso de los minutos", "Tiene mucho que cambiar Alguacil si quiere sacar algo positivo de tierras sevillanas", "Enseguida volvemos con más, que la segunda parte promete ser apasionante."];
    let random = Math.floor(Math.random() * frases.length);
    mensaje = frases[random];
    let div = document.createElement('div');
    div.innerText = mensaje;
    message.appendChild(div);
}

function final() {

    let texto = text.value;
    let palabras = texto.split(' ');
    let caracteres = texto.split('');
    endTime = new Date().getTime();
    let tiempoFinal = (endTime - startTime)/1000;
    let numPalabras = (palabras.length / tiempoFinal)*60;
    let numCaracteres = (caracteres.length / tiempoFinal)*60;
    console.log('tiempo final', tiempoFinal)
    let str = text.value;
    
 

    let div = document.createElement('div');
    let div2 = document.createElement('div');

    div.innerText = `Tus pulsaciones son de ${Math.floor(numCaracteres)} caracteres por minuto y ${Math.floor(numPalabras)} palabras por minuto`;
    div2.innerText = compareWords(str, mensaje);
    div2.style.fontWeight = 'bold';
    div2.style.color = 'orange';
    div.style.fontWeight = 'bold';
    div.style.color = 'gray';
    resultado.appendChild(div);
    resultado.appendChild(div2)

}

function compareWords(str1, str2) {
    console.log(str1, str2);
    let words1 = str1.split(' ');
    let words2 = str2.split(' ');
    let cnt = 0;
    words1.forEach((elem, i) => {
        if (elem == words2[i]) {
            cnt++
        }
    })
    return (`Has tenido ${cnt} palabras correctas de ${words2.length}`)
}
