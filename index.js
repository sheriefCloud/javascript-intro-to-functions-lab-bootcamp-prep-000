function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout (string){
  string = shout(string)
  console.log (string)
}

logShout("HELLO")