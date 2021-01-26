do{
    var number = prompt("son kiriting")
    do {
        if (isNaN(number) || number == "") {
            number = prompt("bu son emas, son kiriting")
        } 
    } while (isNaN(number) || number == ""){
        number % 2 == 1 ? alert('toq son') : alert('juft son')
    }
}while(number != '' || isNaN(number) )
