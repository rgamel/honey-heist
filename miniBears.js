function rng(sides = 6) {
  return Math.floor(Math.random() * 6)
}

(function makeString({d, t, r, h}) {
  const b = confirm('Would you like a hat?')
  const text = `You are ${d} ${t.t} with the ability: ${t.a}. You're the ${r} of the party${b ? `, and have been known to wear a ${h} on occasion` : '.'}`
  alert(text)
  return text
})({
  d: [
    'a Rookie',
    'a Washed-up',
    'a Retired',
    'an Unhinged',
    'a Slick',
    'an Incompetent',
  ][rng()],
  r: [
    'Muscle',
    'Brains',
    'Driver',
    'Hacker',
    'Thief',
    'Face',
  ][rng()],
  t: [
    {t: 'Grizzly Bear', a: '(Terrify)'},
    {t: 'Polar Bear', a: '(Swim)'},
    {t: 'Panda Bear', a: '(Eat anything th looks like bamboo)'},
    {t: 'Black Bear', a: '(Climb)'},
    {t: 'Sun Bear', a: '(Sense honey)'},
    {t: 'Honey Badger', a: '(Carnage)'},
  ][rng()],
  h: [
    'Trilby',
    'Top hat',
    'Bowler',
    'Flat-cap',
    'Cowboy hat',
    'Fez',
    'Crown',
  ][rng(7)],
});

//

// function rng(a=6){return Math.floor(6*Math.random())}!function({d:a,t:e,r:r,h:n}){const t=confirm("Would you like a hat?"),o=`You are ${a} ${e.t} with the ability: ${e.a}. You're the ${r} of the party${t?`, and have been known to wear a ${n} on occasion`:"."}`;alert(o)}({d:["a Rookie","a Washed-up","a Retired","an Unhinged","a Slick","an Incompetent"][rng()],r:["Muscle","Brains","Driver","Hacker","Thief","Face"][rng()],t:[{t:"Grizzly Bear",a:"(Terrify)"},{t:"Polar Bear",a:"(Swim)"},{t:"Panda Bear",a:"(Eat anything th looks like bamboo)"},{t:"Black Bear",a:"(Climb)"},{t:"Sun Bear",a:"(Sense honey)"},{t:"Honey Badger",a:"(Carnage)"}][rng()],h:["Trilby","Top hat","Bowler","Flat-cap","Cowboy hat","Fez","Crown"][rng(7)]});