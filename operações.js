const logger = (x , y) => {
    console.log(`X: ${x} | Y: ${y}`);
};

exports.adiçao = (x, y) => {
    logger(x, y);
    return x + y;
};
exports.subtraçao = (x, y) => {
    logger(x, y);
    return x - y;
};
exports.multiplicaçao = (x, y) => {
    logger(x, y);
    return x * y;
};
exports.divisao = (x, y) => {
    logger(x, y);
    return x / y;
};
