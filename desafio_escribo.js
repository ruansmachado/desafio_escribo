function somaDivisiveis(num) {
  var total = 0; // Aqui se inicia uma contagem dentro da váriavel para armazenar a soma dos números divisiveis;
  for (var i = 0; i < num; i++) {
    // Se inicia um For loop simples afim de inteirar sobre o parâmetro "num"; Iniciando a condicional If para filtrar os números requeridos pelas condições do desafio.
    if (i % 3 === 0 || i % 5 === 0) {
      total += i; //Armazenando uma nova adição em toda iteiração que for feita;
    }
  }
  return total; //Retornando o valor final para a função;
}

console.log(somaDivisiveis(11)); //Por fim imprimindo no Terminal a soma;
