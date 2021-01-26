let S1 = +prompt('Rasstoyaniye ot chelovek do berega');
let S2 = +prompt('Rasstoyaniye ot akuli do cheloveka');
let v1 = 1
let v2 = 3


let d = prompt('Esli delfin est = 1 , inache 0')
if (d == false) {
    if ((S1 + S2) / v2 > S1 / v1) {
        alert('Alive');
    }
    else {
        alert('Shark bit')
    }
}
else {
    if ((S1 + S2) / v2 > S1 / (2 * v1)) {
        alert('Alive');
    }
    else {
        alert('Shark bit')
    }
}