function Animal(nomeCientifico, raca) {
    this.nomeCientifico = nomeCientifico;
    this.raca = raca
}

function Cachorro(nomeCientifico, raca, nome) {
    this.nome = nome;

    this.emitirSom = function () {
        console.log("AuAuAu...")
    }

    Animal.call(this, nomeCientifico, raca);
}

function Gato(nomeCientifico, raca, nome) {
    this.nome = nome;

    this.emitirSom = function () {
        console.log("Miau...")
    }

    Animal.call(this, nomeCientifico, raca);
}

function Vaca(nomeCientifico, raca, nome) {
    this.nome = nome;

    this.emitirSom = function () {
        console.log("Muuuh...")
    }
    Animal.call(this, nomeCientifico, raca);
}

const cachorroBob = new Cachorro("Canis lupus familiaris", "Border Collie", "Bob");
const gatoFrederico = new Gato("Felis catus", "Siamês", "Frederico");
const vacaPintada = new Vaca("Bos taurus", "Holstein-Frísia", "Pintada");

console.log(cachorroBob);
console.log(cachorroBob.emitirSom());

console.log(gatoFrederico);
console.log(gatoFrederico.emitirSom());

console.log(vacaPintada);
console.log(vacaPintada.emitirSom());