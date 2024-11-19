// Imports go first
import { firePottery } from "./Kiln.js"
import { makePottery } from "./PotteryWheel.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("cup", 1, 4)
let vase = makePottery("cylinder", 6, 10)
let bowl = makePottery("bowl", 1, 4)
let teaPot = makePottery("tea pot", 3, 3)
let flowerPot = makePottery("Pot", 8, 12)


// Fire each piece of pottery in the kiln
mug = firePottery(mug,2200)
vase = firePottery(vase,2100)
bowl = firePottery(bowl,2300)
teaPot = firePottery(teaPot,2000)
flowerPot = firePottery(flowerPot,1900)




// Determine which ones should be sold, and their price

console.log(toSellOrNotToSell(mug))
console.log(toSellOrNotToSell(vase))
console.log(toSellOrNotToSell(bowl))
console.log(toSellOrNotToSell(teaPot))
console.log(toSellOrNotToSell(flowerPot))


// Invoke the component function that renders the HTML list

