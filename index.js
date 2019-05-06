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
   
