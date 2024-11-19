// Imports go first
import { firePottery } from "./Kiln.js"
import { makePottery } from "./PotteryWheel.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("cup", 1, 4)
let vase = makePottery("cylinder", 2, 10)
let bowl = makePottery("bowl", 1, 4)
let teaPot = makePottery("tea pot", 3, 3)
let flowerPot = makePottery("Pot", 4, 12)


// Fire each piece of pottery in the kiln
firePottery(mug,2200)
firePottery(vase,2100)
firePottery(bowl,2300)
firePottery(teaPot,2000)
firePottery(flowerPot,1900)

console.log(mug)
console.log(vase)
console.log(bowl)
console.log(teaPot)
console.log(flowerPot)


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

