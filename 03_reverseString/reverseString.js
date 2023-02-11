const reverseString = function(string) {

    // declare an array, in which we push each character into elements of it.
    const stringArray = [];

    // push each character into an element of stringArray.
    for (let i = 0; i < string.length; ++i){
        stringArray.push(string[i]);
    }

    // clear string out for reuse
    string = "";

    // push each character back into string, starting from the back to front
    for (let i = stringArray.length - 1; i >= 0; --i){
        string += stringArray[i];
    }

    // and return our new string.
    return string;
};

// Do not edit below this line
module.exports = reverseString;
