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
  console.log(kittens[0])
  
  var newKittens = [kittens]
  console.log(newKittens)
  newKittens.push(name)
  console.log(newKittens)
  return
}


appendKitten("Joe")