const input = document.getElementById('input')
const english = document.getElementById('english')
const espanol = document.getElementById('espanol')
const btnEscribir = document.getElementById('escribir')
const btnReset = document.getElementById('reset')

input.focus()

btnEscribir.addEventListener('click', (e) => {
    e.preventDefault()
    let num = input.value
    nombrar(num)
    input.focus()

})

btnReset.addEventListener("click", (e) => {
    e.preventDefault()
    input.value = ""
    english.innerText = "Here you will see the typed number in letters"
    espanol.innerText = "Aqui verá el número en letras"
    input.focus()

})


const numbers0_9 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
const numbers10_19 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
const decenasEN = ["ten", "twenty", "thyrty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"]
const numeros0_9 = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"]
const numeros10_19 = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciseis", "diecisiete", "dieciocho", "diecinueve"]
const numeros20_29 = ["veinte", "veintiuno", "veintidos", "veintitres", "veinticuatro", "veinticinco", "veintiseis", "veintisiete", "veintiocho", "veintinueve"]
const decenasES = ["diez", "veinte", "treinta", "caurenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"]
const centenasES = ["cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setencientos", "ochocientos", "novecientos"]


function calcular(num) {
    let unity = Math.floor(num % 10)
    let dec = Math.floor((num % 100) / 10)
    let cent = Math.floor(num / 100)
    return [unity, dec, cent]
}


const nombrar = (num) => {

    // MAYORES A 1000 
    if (num > 999) {
        alert("numero debe ser menor a 1000. Intente nuevamente");
        return
    }

    // CALCULA VALORES DE UNIDAD, DECENA Y CENTENA 
    const composicionNumero = calcular(num)

    // DE 0 A 9
    if (num >= 0 && num < 10) {
        english.innerText = numbers0_9[composicionNumero[0]]
        espanol.innerText = numeros0_9[composicionNumero[0]]
    }
    // DE 10 A 19
    else if (num >= 10 && num < 20) {
        english.innerText = numbers10_19[composicionNumero[0]]
        espanol.innerText = numeros10_19[composicionNumero[0]]
    }
    // DE 20 A 29
    else if (num >= 20 && num < 30) {
        if (composicionNumero[0] == 0) {
            english.innerText = decenasEN[composicionNumero[1] - 1]
            espanol.innerText = decenasES[composicionNumero[1] - 1]
        }
        else {
            english.innerText = decenasEN[composicionNumero[1] - 1] + " " + numbers0_9[composicionNumero[0]]
            espanol.innerText = numeros20_29[composicionNumero[0]]
        }
    }
    // DE 30 A 99 
    else if (num >= 30 && num < 100) {
        if (composicionNumero[0] == 0) {
            english.innerText = decenasEN[composicionNumero[1] - 1]
        }
        else {
            english.innerText = decenasEN[composicionNumero[1] - 1] + " " + numbers0_9[composicionNumero[0]]
            espanol.innerText = decenasES[composicionNumero[1] - 1] + " y " + numeros0_9[composicionNumero[0]]
        }
    }

    // MAYORES A 100
    else if (num >= 100 && num < 1000) {
        // IGUAL A 100 
        if (composicionNumero[0] == 0 && composicionNumero[1] == 0) {
            english.innerText = numbers0_9[composicionNumero[2]] + " hundred "
            espanol.innerText = centenasES[composicionNumero[2] - 1]
        }
        // ENTRE X00 y X10  
        else {
            if (num >= composicionNumero[2] * 100 && num < (composicionNumero[2] * 100) + 10) {
                console.log("entre 00 y 10");
                console.log(composicionNumero[2] * 100);
                console.log((composicionNumero[2] * 100) + 10)
                english.innerText = numbers0_9[composicionNumero[2]] + " hundred " + numbers0_9[composicionNumero[0]]
                if (composicionNumero[2] == 1) {
                    espanol.innerText = centenasES[composicionNumero[2] - 1] + "to " + numeros0_9[composicionNumero[0]]
                }
                else{
                    espanol.innerText = centenasES[composicionNumero[2] - 1] + " " + numeros0_9[composicionNumero[0]]
                }
            }
            // ENTRE X10 Y X20 
            else if (num >= (composicionNumero[2] * 100) + 10 && num < (composicionNumero[2] * 100) + 20) {
                console.log("entre 10 y 20");
                english.innerText = numbers0_9[composicionNumero[2]] + " hundred " + numbers10_19[composicionNumero[0]]
                espanol.innerText = centenasES[composicionNumero[2] - 1] + "to " + numeros10_19[composicionNumero[0]]
            }
            // ENTRE X20 Y X30 
            else if (num >= (composicionNumero[2] * 100) + 20 && num < (composicionNumero[2] * 100) + 30) {
                console.log("entre 20 y 30");
                if (composicionNumero[0] === 0) {
                    english.innerText = numbers0_9[composicionNumero[2]] + " hundred " + decenasEN[composicionNumero[1] - 1]
                    espanol.innerText = centenasES[composicionNumero[2] - 1] + "to " + numeros20_29[composicionNumero[0]]
                }
                else {
                    english.innerText = numbers0_9[composicionNumero[2]] + " hundred " + decenasEN[composicionNumero[1] - 1] + " " + numbers0_9[composicionNumero[0]]
                    espanol.innerText = centenasES[composicionNumero[2] - 1] + "to " + numeros20_29[composicionNumero[0]]
                }
            }
            // ENTRE X30 Y X00 
            else if (num >= (composicionNumero[2] * 100) + 30 && num < (composicionNumero[2] * 100) + 100) {
                console.log("mas de 30");
                if (composicionNumero[0] === 0) {
                    english.innerText = numbers0_9[composicionNumero[2]] + " hundred " + decenasEN[composicionNumero[1] - 1]
                    espanol.innerText = centenasES[composicionNumero[2] - 1] + "to " + decenasES[composicionNumero[1] - 1]
                }
                else {
                    english.innerText = numbers0_9[composicionNumero[2]] + " hundred " + decenasEN[composicionNumero[1] - 1] + " " + numbers0_9[composicionNumero[0]]
                    espanol.innerText = centenasES[composicionNumero[2] - 1] + "to " + decenasES[composicionNumero[1] - 1] + " y " + numeros0_9[composicionNumero[0]]
                }
            }
            // else {
            //     english.innerText = numbers0_9[composicionNumero[2]] + " hundred " + decenasEN[composicionNumero[1] - 1] + " " + numbers0_9[composicionNumero[0]]
            // }
        }

    }
}

