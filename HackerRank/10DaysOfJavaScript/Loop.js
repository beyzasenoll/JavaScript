'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for(const ltr of s) {
        if (['a', 'e', 'i', 'o', 'u'].includes(ltr)) {
            console.log(ltr);    
        } 
    }
    for(const ltr of s) {
        if (!['a', 'e', 'i', 'o', 'u'].includes(ltr)) {
            console.log(ltr);    
        } 
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}