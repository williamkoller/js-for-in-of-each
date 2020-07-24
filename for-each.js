let myArray = ['JavaScript', 'TypeScript', 'Nodejs']

/**
 * forEach ele percorre cada elemento de um array executando uma
 * função que é passada como parâmetro.
 * a função que passamos como parâmetro para o forEach recebe
 * como parâmetro obrigatório o curretValue, e como opcional o index eo array inteiro.
 */
function showArray(currentValue, index, array) {
  console.log(`Indice: ${index} - Valor: ${currentValue}`)
}

myArray.forEach(showArray)