function change() {
let c;
let d;
c = 1;
d = 2;
console.log(c, d);
let e = c;
c = d;
d = e;
console.log(c, d);
}


function calcGip() {
    let m = parseInt(document.getElementById("legk").value);
    let n = parseInt(document.getElementById("legl").value);
    let g;
    g = (Math.sqrt((m ** 2) + (n ** 2)));
    alert(g);
}

function getEquation() {
    let x1 = prompt('введите x1') * 1;
    let y1 = prompt('введите y1') * 1;
    let x2 = prompt('введите x2') * 1;
    let y2 = prompt('введите y2') * 1;
    let k = (y2 - y1) / (x2 - x1);
    let b = y1 - (k * x1);
    alert('y=' + k + 'x+' + b);
}

function calcMax() {
    let a = (-1) * ((Math.random() * 20) - 10);
    let b = (-1) * ((Math.random() * 20) - 10);
    let c = (-1) * ((Math.random() * 20) - 10);
    console.log((Math.max
        (a*b*c, a+b+c) + 3));
}

function divideNumbers() {
    let a = (-1) * (Math.floor(Math.random() * 200) - 100);
    let b = (-1) * (Math.floor(Math.random() * 200) - 100);
    console.log(a, b); 
    if (b == 0) {
        console.log('на ноль делить нельзя');
    }
    else if (a % b == 0) {
        console.log('делится без остатка, частное = ' + (a / b));
    }
    else if (a % b != 0) {
        console.log('не делится без остатка, остаток = ' + (a % b) + ', частное = ' + (a / b));
    }
}

function defineQuart() {
    let x = (-1) * ((Math.random() * 20) - 10);
    let y = (-1) * ((Math.random() * 20) - 10);
    console.log(x, y);
    if (x >= 0 & y >= 0) {
        console.log('точка принадлежит I четверти');
    }
    else if (x < 0 & y >= 0) {
        console.log('точка принадлежит II четверти');
    }
    else if (x < 0 & y < 0) {
        console.log('точка принадлежит III четверти');
    }
    else if (x >= 0 & y < 0) {
        console.log('точка принадлежит IV четверти');
    }
}

function definePoint() {
    let x = (-1) * ((Math.random() * 30) - 15);
    let y = (-1) * ((Math.random() * 30) - 15);
    console.log(x, y);
    let r = (-1) * ((Math.random() * 20) - 10);
    let g = (Math.sqrt((x ** 2) + (y ** 2)));
    if (g <= r) {
        console.log('точка принадлежит кругу');
    }
    else if (g > r) { 
        console.log('точка не принадлежит кругу'); 
    }
}

function solveSqrtEquation() {
    let a = prompt('введите любое число, кроме нуля');
    let b = prompt('введите любое число');
    let c = prompt('введите любое число');
    const d = ((b * b) - (4 * a * c));
    if (a == 0) {
        console.log('на нуль делить нельзя');
    }
    else if (d < 0) {
        console.log('нет корней');
    }
    else if (d == 0) {
        console.log('корень равен ' + ((-b / (2 * a))));
    }
    else if (d > 0) {
        console.log('первый корень ' + ((-b + Math.sqrt(d)) / (2 * a)) + ', a второй корень ' + ((-b - Math.sqrt(d)) / (2 * a)));
    }
}