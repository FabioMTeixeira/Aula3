const operaçoes = require('./operações');

const main = () => {
    const x = 10;
    const y = 2;

    console.log(`Adição: ${operaçoes.adiçao(x, y)}`);
    console.log(`Subtração: ${operaçoes.subtraçao(x, y)}`);
    console.log(`Multiplicação: ${operaçoes.multiplicaçao(x, y)}`);
    console.log(`Divisão: ${operaçoes.divisao(x, y)}`);
};

main();