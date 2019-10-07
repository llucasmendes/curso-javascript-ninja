/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var aleatorios = ['Lucas', 3, true, 7.2, 9];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray( ale ) {

	return ale;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(retornaArray( aleatorios )[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function myFuntion(arr, num) {

	return arr[num];
}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var recebeu = [undefined, 2, 4.3, false, {a:1}];
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFuntion(recebeu,0));
console.log(myFuntion(recebeu,1));
console.log(myFuntion(recebeu,2));
console.log(myFuntion(recebeu,3));
console.log(myFuntion(recebeu,4));
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName){

	obj = {
		'book 1': {
			quantidadePaginas: 100,
			autor: 'Joel',
			editora: 'Epoca'
		},
		'book 2': {
			quantidadePaginas: 200,
			autor: 'Lucas',
			editora: 'Atual'
		},
		'book 3': {
			quantidadePaginas: 300,
			autor: 'Celine',
			editora: 'Futura'
		}
	};

	if(bookName === undefined){
		return obj;
	}else{
		return obj[bookName];
	}

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'book 1';
console.log("O livro "+ bookName +" tem "+ book(bookName).quantidadePaginas +" páginas!");
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro "+bookName+" é "+ book(bookName).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro "+bookName+" foi publicado pela editora "+ book(bookName).editora +".");
