function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada!");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}

/*function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>" //a tag b coloca negrito no texto;  inner acrescenta um texto,link, tags, qualquer coisa para o elemento que foi "puxado"
}*/

/*function redirecionar() {
   // window.open("https://digitalinnovation.one/"); //abre o site em outra aba
   window.location.href = "https://digitalinnovation.one/"; //abre na mesma janela do site
}*/


/*function clicou(){
    alert("Obrigado por clicar");
}
*/




/*function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

/*function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
} 
alert(soma(5,10))
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/


/*var d = new Date();
alert(d); // os comandos getMonth getMinutes getDay getHours e outros apresentam a informação específica no alerta
*/

/*var count;
for(count=0; count<=5; count++){ // outra forma de laço condicional
    alert(count);
}
*/

/*var count = 0;
while(count < 5){
    console.log(count);
    alert(count;)
    count = count + 1; //count++ também pode ser utilizado para substituir o count + 1
}
*/



//var idade = prompt("Qual sua idade?"); // o comando prompt aparece uma caixa de diálogo para o usuário inserir a informação que, neste caso, ficou gravada em idade, onde será feito o laço condicional em seguida para verificar se é maior de idade

/*var idade = 18;
if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/


/*var frutas = [{nome:"maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].cor);
*/

/*var fruta = {nome:"maça", cor: "vermelha"}; //dicionário
console.log(fruta.nome); //mostra apenas o nome
alert(fruta.cor); // mostra apenas a cor
*/

//var lista = ["maça", "pera", "laranja"];

//console.log(lista[1]);
//console.log(lista.toString()); //retorna a spring da lista, se colocar [número] irá retornar o item da lista
//console.log(lista.join(" - ")); //semelhante ao toString porém adiciona algo no meio da string

//console.log(lista.length()) //retorna o tamanho da lista

//lista.pop(); //remover o último item da lista

//lista.push("uva"); //adicionar no final da lista

//alert(lista[1]);

//var nome = "Natália Alves";
//var idade = 22;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//alert(frase.toUpperCase());
//console.log(frase.replace("Japão" , "Brasil"));
//alert(frase.replace("Japão" , "Brasil"));