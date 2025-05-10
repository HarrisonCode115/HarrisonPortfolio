let values = []


let i = 0
let j = 0

//Called on start up to initialise canvas.
function setup() {
  const canvas = createCanvas(windowWidth/1.8, windowHeight/2   )
  canvas.parent('bubble-container')
  values = new Array(floor(width))
  for (let i = 0; i < values.length; i++) {
    values[i] = random(255)
  }
}

//Called every frame.
function draw() {
  background(0)
  //Uses i index to slow down the procces so it can be seen
  if (i < values.length) {
    //Does bubble sort for items in the array
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j]
      let b = values[j + 1]
      if (a > b) {
        swap(values, j, j + 1)
      }

    }
  }
  else {
    console.log("Finished")
    noLoop()
  }
  i++
  stroke(255)
  strokeWeight(1)
  //Plots the lines each iteration.
  for (let i = 0; i < values.length; i++) {
    stroke(values[i],0,0)
    line(i, height, i, height-(values[i]/255 * height))
  }
}

//Swaps two numbers
function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}