const app = "I don't do much."

function destructivelyAppendKitten(name){
  //console.log(kittens)
  return kittens.push(name)
}
function destructivelyPrependKitten(name){
  //console.log(kittens)
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name){
  //console.log(kittens)
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(name){
  //console.log(kittens)
  kittens.shift()
  return kittens
}

function appendKitten(name){
  var newKittens = kittens.slice()
  newKittens.push(name)
  return newKittens
}
function prependKitten(name){
  var newKittens = [...kittens]
  newKittens.shift(name)
  return newKittens
}


