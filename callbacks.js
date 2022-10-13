//Sincrono
const calculo = (x, y, callback) => {
    callback();

    console.log(`Soma: ${x + y}`);
};

const main = () => {
    console.log('Inicio');

    calculo(10, 2, () => {
        console.log('Callback');
    })

    console.log('Fim');
};

main();