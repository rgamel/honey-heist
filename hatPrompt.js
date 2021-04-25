function rand(sides = 6) {
    return Math.floor(Math.random() * 6)
}

const valuesString = Array(3).fill(0).map(rand).concat(rand(7)).join(',')

function getQueries() { return `?hat=${wearsHat}&seed=${valuesString}` }

function goToCharacterSheet() {
    window.location.assign('./sheet.html' + getQueries())
}
function onClickHandler(e) {
    wearsHat = e.currentTarget.value
    goToCharacterSheet()
}

document.getElementById('yes').addEventListener('click', onClickHandler)
document.getElementById('no').addEventListener('click', onClickHandler)