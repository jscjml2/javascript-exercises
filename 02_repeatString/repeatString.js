const repeatString = function(string, num) {
    str = string;

    if (num === 0){
        return "";
    } else if (num < 0){
        return "ERROR";
    }

    for (let i = 0; i < num - 1; i++) {
        str += string;
    }

    return str;
};

// Do not edit below this line
module.exports = repeatString;
