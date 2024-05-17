const submit = document.querySelector(".button");
const result = document.querySelector(".result")
const result2 = document.querySelector(".result2");
function verificarNumeros(a, b) {
    return a < b;
}

submit.addEventListener("click", (event) => {
    event.preventDefault();

    const numA = document.querySelector("#numA").value;
    const numB = document.querySelector("#numB").value;

    if (verificarNumeros(numA, numB) && numA !== "" && numB !== "") {
        result.style.display = "inline-block";
        result2.style.display = "none";
        console.log(result);

    } else {
        result.style.display = "none";
        result2.style.display = "inline-block"
    }
})
