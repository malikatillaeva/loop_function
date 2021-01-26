let number = prompt('vvedite chislo')
let line = ''
for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
        if (i==j || i==1 || j==1 || i==number || j==number) {
            line += '[*]'
        }
        else{
            line +='   '
        }
    }
    console.log(line);
    line = ''
}