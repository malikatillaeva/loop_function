let number = prompt('vvedite chislo')
let line = ''
for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
        if (i == j) {
            line += '*'
        }else if(i<j){
            line+= ''
        }
        else{
            line +=' _ '
        }
    }
    console.log(line);
    line = ''
}