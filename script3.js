let pow = 1
do {
    var son = prompt('Son kiriting')
} while (isNaN(son) || son == 0)

do {
    var daraja = prompt('Darajani kiriting')
} while (isNaN(daraja) || daraja == 0)

for (let i = 0; i < daraja; i++) {
    {
        pow *= son;
    }
}
alert(pow);  