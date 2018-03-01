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

function appendKitten(array,name){
  var newKittens = [array.push(name)]
  
  //newKittens.push(name)
  
  return newKittens
}

//console.log(kittens)
appendKitten("Joe")
