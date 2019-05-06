function cpfIncome(string){
    const cpf  = string.split('').map(Number);
    return [multiply(cpf, 9, 10), multiply(cpf, 10, 11)];   
};

function multiply(cpf, sliceNum, mult){
    const multiplying = cpf.splice(0, sliceNum).map((currElement,index) => { let x = mult - index;
      return currElement * x;
    });
    const digit = sum(multiplying);
    return digit;
};
   