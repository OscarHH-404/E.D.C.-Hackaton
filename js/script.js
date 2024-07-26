let inputNumeroDePeatones;
const totalPeatones =  document.querySelector("[data-input-boton]");
totalPeatones.addEventListener("click", tiempoTotalVerde);

function tiempoTotalVerde(){
    inputNumeroDePeatones =  document.querySelector("[data-input-peatones]");
    valorEnNumero = Number(inputNumeroDePeatones.value);
    let tiempoEnVerde = 60; /*Equivale a un minuto*/
    
    if (valorEnNumero <= 4 && valorEnNumero > 0) {
        tiempoEnVerde = tiempoEnVerde - 10;
        let caja = document.querySelector(".caja");
        caja.classList.add("caja");
        caja.innerHTML = `El tiempo de espera de ${valorEnNumero} peaton(es) se reduce de 60 segundos a ${tiempoEnVerde} segundos`;
        inputNumeroDePeatones.value = "";
    }else if(valorEnNumero > 4){
        tiempoEnVerde = tiempoEnVerde - 20;
        let caja = document.querySelector(".caja");
        caja.classList.add("caja");
        caja.innerHTML = `El tiempo de espera de ${valorEnNumero} peaton(es) se reduce de 60 segundos a ${tiempoEnVerde} segundos`;
        inputNumeroDePeatones.value = "";
    }else if(valorEnNumero <= 0){
        let caja = document.querySelector(".caja");
        caja.classList.add("caja");
        caja.innerHTML = `Datos no validos, ingresa un número mayor a 0`;
        inputNumeroDePeatones.value = "";
    }
}