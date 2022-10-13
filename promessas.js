// const primeiroNome = (nome, callback) => {
//     const segmentos = nome.split(' ');

//     return callback(segmentos[0]);
// };

// const caixaAlta = (nome, callback) => {
//     return callback(nome.toUpperCase());
// };

// primeiroNome('Bruno Azisaka', (varPrimeiroNome) => {
//     caixaAlta(varPrimeiroNome, (varCaixaAlta) => {
//         console.log(varCaixaAlta);
//     })
// })


const primeiroNomePromise = (nome) => {
    return new Promise((resolve, reject) => {
        const segmentos = nome.split(' ');
        return resolve(segmentos[0]);
    });
};

const caixaAltaPromise = (nome) => {
    return new Promise((resolve, reject) => {
        return resolve(nome.toUpperCase());
    });
};

const primeiraLetraPromise = (nome) => {
    return new Promise((resolve, reject) => {
        return resolve(nome[0]);
    });
};

const main = (nome) => {
    return new Promise((resolve, reject) => {
        return resolve(nome);
    });
};

main("Bruno Azisaka")
.then(primeiroNomePromise)
.then(caixaAltaPromise)
.then(primeiraLetraPromise)
.then((nome) => {
    console.log(nome)
});