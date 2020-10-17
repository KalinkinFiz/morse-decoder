const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let startPos = 0;
    let decoded = "";
    for (let i = 0; i < expr.length/10; i++) {
        let letterNums = expr.slice(startPos, startPos + 10);
        startPos += 10;
        if (letterNums == "**********") {
            decoded += " ";
            continue;
        }
        let morsed = "";
        for (let j = 10; j > 0; j -= 2) {
            switch( letterNums.slice(j-2, j) ) {
                case "10" : morsed += "."; break;
                case "11" : morsed += "-"; break; 
                default: break;
            }
        }
        decoded += MORSE_TABLE[ morsed.split("").reverse().join("") ];
    }
    return decoded;
}

module.exports = {
    decode
}