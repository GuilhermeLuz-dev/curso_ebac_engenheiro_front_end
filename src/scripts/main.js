document.addEventListener('DOMContentLoaded', function () {

    quantDeNotas();
    document.getElementById('buttonCalcular').addEventListener('click',calcularNotas); 

})

function quantDeNotas() {

    let quantMedia = document.querySelector(".quant-notas input");
    quantMedia.addEventListener('input', () => {
        document.getElementById("campos-notas").textContent = "";
        for (let i = 0; i < quantMedia.value; i++) {

            let newLabel = document.createElement('label');
            let newInput = document.createElement('input');
            let newDiv = document.createElement('div');

            newLabel.textContent = `Nota ${i + 1}`;
            newInput.type = 'number';
            newInput.min = "0";
            newInput.value = "0"

            newDiv.appendChild(newLabel);
            newDiv.appendChild(newInput);

            document.getElementById("campos-notas").appendChild(newDiv);
        }
    })
}

function calcularNotas(){
    let medias = document.getElementById("campos-notas").children;
    mediasArray = Array.from(medias);

    somaMedias = 0;

    mediasArray.forEach(element => {
        somaMedias += parseInt(element.querySelector("input").value); 
    });

    document.querySelector("#result").innerHTML = (somaMedias / medias.length).toFixed(2);
}
