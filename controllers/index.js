const awesomeFunction = (req, res, next) => {
    res.json('Julyane Moreira');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Super Awesome person');
};

module.exports = { awesomeFunction, returnAnotherPerson };