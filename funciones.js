function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 6)
console.log(rndInt)


function computerPlay() {
    // your code here!
    let item = ["Piedra", "Papel", "Tijera"]
    let i = randomIntFromInterval(1, 3)
    console.log(i)
    console(item(i-1))
    return item(i-1)
    

  }

computerPlay();
  