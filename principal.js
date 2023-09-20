//-------------------------------------------------------------
//daqui pra baixo começa o js do site

//busca no site pelo titulo e armazena dentro da variavel titulo
let titulo = document.querySelector(".titulo");

//mostra no devtools o conteudo de texto da variavel titulo
console.log(titulo.textContent);

//altera o conteudo da variavel titulo para o texto desejado
titulo.textContent = "xirikitiquis nutrições";

//mudanças na tabela

//armazena no array paciente os dados de todos os pacientes
let pacientes = document.querySelectorAll(".paciente");

//criação do looping for
for(i = 0; i < pacientes.length; i++){

}
let paciente = pacientes [i];
let tdPeso = pacientes.querySelector(".info-peso");
let tdAltura = pacientes.querySelector(".info-altura");

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura*altura);
console.log(imc);

let tdImc = pacientes.querySelector(".info-imc");
tdImc.textContent = imc;

//validação de dados
//criação de variáveis boleanas
let pesoEhValido = true;
let alturaEhValida =  true;

//validaçao de dados
if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido!");
    pesoEhValido = false;
}
//verificação se a altura é valida
if(altura <= 0 || altura >= 3){
    console.log("Altura inválida!");
    alturaEhValida = false;
}
if (pesoEhValido && alturaEhValida){
tdAltura.Imc.textContent = "Altura invalida!";
    let imc = peso / (altura*altura);
    tdImc.textContent = imc;
} else {
    tdImc.textContent = "Caraiii é o lebron jeimes!";
}
