const palindromo1 = 'sedes';
const palindromo2 = 'cocos';

function esPalindromo(palabra) {
    const check = palabra.split("").reverse().join('');
    return check == palabra;
}

console.log(esPalindromo(palindromo1));
console.log(esPalindromo(palindromo2));