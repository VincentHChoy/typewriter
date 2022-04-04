const sentence = "hello there from lighthouse labs";

const typewriter = function(sentence) {
let x = 50
for (const char of sentence) {
  setTimeout(() => { 
    process.stdout.write(char)
  }, x)
  x += 100
}

setTimeout(() => { 
  console.log('\n')
}, x)
}

typewriter(sentence)