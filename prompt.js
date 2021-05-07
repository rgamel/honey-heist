function rand(sides = 6) {
    return Math.floor(Math.random() * sides)
}

function parseBool(val) {
    return val === true || val === 'true'
}

function onClickHandler(e) {
    const { value } = e.currentTarget
    const randoms = Array(3).fill(0).map(rand)
    if (parseBool(value)) {
        randoms.push(rand(7))
    }
    const valuesString = randoms.join(',')
    window.location.assign(`./sheet.html?seed=${valuesString}`)
}

document.getElementById('yes').addEventListener('click', onClickHandler)
document.getElementById('no').addEventListener('click', onClickHandler)