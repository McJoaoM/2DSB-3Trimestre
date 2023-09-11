//-------------------------------------------------------------
//daqui pra baixo começa o js do site;

//busca no site pelo titulo e armazena dentro da variavel titulo;
let titulo = document.querySelector(".titulo");
//mostra no devtools o conteudo de texto da variavel titulo;
console.log(titulo.textContent);
//altera o conteudo da variavel titulo para o texto desejado;
titulo.textContent = "Fica China pasta";

//mudanças no titulo
//armazena na variavel paciente os dados primeiros;
let paciente = document.querySelector("#primeiro-paciente");
//mostra on console  o valor da variavel;
console.log("paciente");

let tdPeso = paciente.querySelector("info-peso");
let tdAltura = paciente.querySelector("info-altura");

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura*altura);
console.log(imc);

let tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;
    

