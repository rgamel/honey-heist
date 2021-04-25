const TRANSITION_DELAY = 500

const DESCRIPTORS = [
  'Rookie',
  'Washed-up',
  'Retired',
  'Unhinged',
  'Slick',
  'Incompetent',
]

const ROLES = [
  'Muscle',
  'Brains',
  'Driver',
  'Hacker',
  'Thief',
  'Face',
]

const TYPES_AND_SKILLS = [
  { type: 'Grizzly Bear', ability: 'Terrify'},
  { type: 'Polar Bear', ability: 'Swim'},
  { type: 'Panda Bear', ability: 'Eat anything that looks like bamboo'},
  { type: 'Black Bear', ability: 'Climb'},
  { type: 'Sun Bear', ability: 'Sense honey'},
  { type: 'Honey Badger', ability: 'Cause carnage'},
]

const HATS = [
  'Trilby',
  'Top hat',
  'Bowler',
  'Flat-cap',
  'Cowboy hat',
  'Fez',
  'Crown',
]

function rand(sides = 6) {
  return Math.floor(Math.random() * 6)
}

function makeBear() {
  return {
    descriptor: DESCRIPTORS[rand()],
    role: ROLES[rand()],
    type: TYPES_AND_SKILLS[rand()],
    hat: HATS[rand(7)],
  }
}

function getIndefiniteArticle(descriptor) {
  if (['a', 'e', 'i', 'o', 'u'].includes(descriptor[0].toLowerCase())){
    return 'an'
  }
  return 'a'
}

function makeString({descriptor, type, role, hat}) {
  const wearsHat = confirm('Would you like a hat?')
  return `<span>You are ${getIndefiniteArticle(descriptor)} <strong>${descriptor} ${type.type}</strong> with the ability to <strong>${type.ability}</strong>. You're the <strong>${role}</strong> of the party${wearsHat ? `, and have been known to wear a <strong>${hat}</strong>.` : '.'}</span>`
}

const description = document.getElementById('description')
description.innerHTML = makeString(makeBear())

const btcBtn = document.getElementById('btc')
const ctbBtn = document.getElementById('ctb')
const bearStat = document.getElementById('bearStat')
const criminalStat = document.getElementById('criminalStat')

let bearCount = 3
let criminalCount = 3

bearStat.innerHTML = bearCount
criminalStat.innerHTML = criminalCount

btcBtn.addEventListener('click', () => {
  if (bearCount <= 0 || criminalCount >= 6) {
    return
  }
  bearCount--
  criminalCount++
  updateStats()
})

ctbBtn.addEventListener('click', () => {
  if (criminalCount <= 0 || bearCount >= 6) {
    return
  }
  criminalCount--
  bearCount++
  console.log(criminalCount, bearCount)
  updateStats()
})

function updateStats() {
  criminalStat.innerHTML = criminalCount
  bearStat.innerHTML = bearCount
  checkForEndState()
}

function checkForEndState() {
  if (bearCount >= 6) {
    addEndStyle(bearStat)
    delayTransition(showBearEnding)
  }
  if (criminalCount >= 6) {
    addEndStyle(criminalStat)
    delayTransition(showCriminalEnding)
  }
}

function delayTransition(transitionFn) {
  setTimeout(transitionFn, TRANSITION_DELAY)
}

function showCriminalEnding() {
  document.body.innerHTML = '<div class="section outro">You are lured into a life of crime and betray the party.</div>'
  document.body.classList.add('section')
}

function showBearEnding() {
  document.body.innerHTML = '<div class="section outro">You flip out bear-style and lose it. Presumably to be picked up by Animal Control in half an hour or so.</div>'
  document.body.classList.add('section')
}

function addEndStyle(statElement) {
  statElement.classList.add('ending')
}