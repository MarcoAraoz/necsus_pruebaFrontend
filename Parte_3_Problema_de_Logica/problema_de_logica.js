// Parte 3: Resolución de Problemas 

// Problema de Lógica: 
// Escribe una función en JavaScript que tome un arreglo de números como parámetro y  devuelva el número más grande.

function obtenerNumeroMasGrande(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return null;
    }
    
    let max = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i];
        }
    }
    
    return max;
}

const numeros = [10, 5, 20, 8, 15];
const masGrande = obtenerNumeroMasGrande(numeros);
console.log("El número más grande es:", masGrande);