const contenedorParrafo = document.querySelector("[data-parrafo]");
const parrafo = document.createElement("p");

function climaBueno(){
    parrafo.textContent = "Calidad del aíre satisfactoria. Sin riesgo.";
    contenedorParrafo.appendChild(parrafo);
    mad = document.getElementById("miImg");
    mad.src = "img/bueno.png";
}

function climaRegular(){
    parrafo.textContent = "La calidad del aíre es aceptable.";
    contenedorParrafo.appendChild(parrafo);
    mad = document.getElementById("miImg");
    mad.src = "img/regular.png";
}

function climaMalo(){
    parrafo.textContent = "La calidad del aíre es mala, dañina a grupos sensibles.";
    contenedorParrafo.appendChild(parrafo);
    mad = document.getElementById("miImg");
    mad.src = "img/malo.png";
}

function climaMuyMalo(){
    parrafo.textContent = "La calidad del aíre es muy mala, dañina a la salud.";
    contenedorParrafo.appendChild(parrafo);
    mad = document.getElementById("miImg");
    mad.src = "img/muyMalo.png";
}

function climaExtremo(){
    parrafo.textContent = "La calidad del aíre es extremadamente mala, muy dañina a la salud.";
    contenedorParrafo.appendChild(parrafo);
    mad = document.getElementById("miImg");
    mad.src = "img/extremadamente.png";
}