const fibonacci = function(num) {
    let number = num;
    let vector = [];

    let n1 = 0;
    let n2 = 1;
    let nextTerm = 0;

    if (num < 0){
        return "OOPS";
    }

    if (typeof num == "string") {
        let a = parseInt(num);
        for (let i = 0; i < a; ++i) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
    
            vector.push(n1);
        }
    } else { 
        for (let i = 0; i < num; ++i) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
    
            vector.push(n1);
        }
    }

    return vector[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
