function cpfIncome(string){
    const cpf  = string.split('').map(Number);
    return [multiply(cpf, 9, 10), multiply(cpf, 10, 11)];   
};

function cpfLength(cpf){
    return (cpf.length === 11)
};

function sameNumber(cpf){
    return !( cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" || cpf === "33333333333" ||
     cpf === "44444444444" || cpf === "55555555555" || cpf === "66666666666" || cpf === "77777777777" ||
     cpf === "88888888888" || cpf === "99999999999")
};

function multiply(cpf, sliceNum, mult){
    const multiplying = cpf.splice(0, sliceNum).map((currElement,index) => { let x = mult - index;
      return currElement * x;
    });
    const digit = sum(multiplying);
    return digit;
};
   
function sum(cpf){
    const cpfSum = cpf.reduce((counter, element) => {return counter + element});
    const cpfModule = (cpfSum * 10) % 11 % 10;
    return cpfModule
};

function cpfValidator(cpf){
    const cpfNumber = cpfIncome(cpf);
    const isFirstEqual = cpfNumber[0] === parseInt(cpf[9]);
    const isSecondEqual = cpfNumber[1] === parseInt(cpf[10]);
    return ((isFirstEqual && isSecondEqual) && sameNumber(cpf) && cpfLength(cpf));   
};
   
console.log(cpfValidator('87052536080'));
   
module.exports.cpfValidator = cpfValidator;