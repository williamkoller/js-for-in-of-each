let myArray = [2,4,6]
/**
 * for in é responsável por percorrer pelas propriedades enumeradas de um objeto
 *  vai percorrer as propriedades do objeto,
 * que foram enumeradas com base na ordem de inserção,
 * e não os valores das propridades,
 * se temos um array com três valores dentro,
 * as prorpiedades vão ser os índices
 * de cada posição começando pelo zero
 */  

for(let prop in myArray) {
  console.log(prop)
}

let  myObj = {
  veiculo:  'Bicicleta',
  descricao: 'Veiculo de duas rodas'
}

/**
 *  nãi vai percorrer o valor que cada propriedade possui,
 * mas sim em cada propridade declarada,
 * por isso não temos como retorno os valores.
 */
for (let prop in myObj) {
  console.log(prop)
}

let mySecondObj = {
  veiculo: 'Carro',
  descricao: 'Veiculo de quatro rodas'
}

/**
 * como dentro do for in temos o acesso a cada propridade, 
 * poderíamos user elas como índice do objeto para ter acesso ao valor
 * que cada propriedade possui.
 */
for (let prop in mySecondObj) {
  console.log(mySecondObj[prop])
}