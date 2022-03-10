function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const data = process.argv;
    const name = data[data.length -1]
    return name
}
function getNameFromEnv() {
    // Write your code here
    process.env.name='Yash';
    return (process.env.name);
}

function getNameFromReadLine() {
    const readline = require('readline');
    readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
} 

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}