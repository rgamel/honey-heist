function rand(sides = 6) {
  return Math.floor(Math.random() * 6)
}

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
  'Grizzly (Terrify)',
  'Polar (Swim)',
  'Panda (Eat anything that looks like bamboo)',
  'Black (Climb)',
  'Sun (Sense honey)',
  'Honey Badger (Carnage)',
]

const HATS = [
  'Trilby',
  'Top',
  'Bowler',
  'Flat-cap',
  'Cowboy',
  'Fez',
  'Crown',
]

function makeBear() {
  return {
    descriptor: DESCRIPTORS[rand()],
    role: ROLES[rand()],
    type: TYPES_AND_SKILLS[rand()],
    hat: HATS[rand(7)],
  }
}

module.exports = {
  makeBear,
}