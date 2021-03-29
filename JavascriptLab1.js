let name1 = "Nita"
let age = "old enough"
let birthday = "Dec 31"
const DetroitGC = true
let lifeEvents = ["attended college","attended grad school","got job","attended other colleges"]
if (DetroitGC) {
  console.log(`My name is ${name1} and I am a student at Grand Circus in Detroit, Michigan.
  I am currently ${age} and my birthday is on ${birthday}. `);
}else{
  console.log(`My name is ${name1} and I am a student at Grand Circus in Grand Rapids, Michigan.
  I am currently ${age} and my birthday is on ${birthday}. `);
 }
  for (let i = 0; i < lifeEvents.length; i++){
   console.log(lifeEvents[i])  
   } 
    let counter = 0   
while (true) {
  
 // Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
 //document.getElementById("demo").innerHTML =
 var randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber!==5) {
    counter++
    console.log("randomNumber!==5")
  }else{
    counter++
    console.log(`randomNumber 5===5. It took ${counter}
 iterations to randomly generate the number 5.`)
 break;
  }
}
