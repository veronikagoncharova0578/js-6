const mul = function(n, m) {
    return `сумма ${n + m}, разница ${n - m}, умножение ${n * m}`;
};
const res = mul(n = Number(prompt('Введите первое число')), m = Number(prompt("Введите второе число")));
alert(res);