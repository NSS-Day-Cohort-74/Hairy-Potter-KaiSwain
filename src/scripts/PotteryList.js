import { toSellArray } from "./PotteryCatalog.js"

export const potteryList = () => {
    let potteryHTML = ''
    for (const pottery of toSellArray) {
        potteryHTML += 
        `<section class="pottery" id="pottery--1">
            <h2 class="pottery__shape">${pottery.shape}</h2>
                <div class="pottery__properties">
                    Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
                </div>
        </section>`
    }
    return potteryHTML
}