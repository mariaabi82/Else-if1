let pedirHora = prompt(`¿Qué hora es? Contestar de 00 a 23`)

if (pedirHora > 5 && pedirHora < 12) {
    alert(`¡Buen día!`)
}
else if (pedirHora >= 12 && pedirHora < 20) {
    alert(`¡Buenas tardes!`)
}
else {
    alert(`¡Buenas noches!`)
}