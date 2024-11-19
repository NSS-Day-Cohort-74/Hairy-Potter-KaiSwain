export const toSellArray = []

export const toSellOrNotToSell = (potteryObj) => {
    
    if(potteryObj.weight > 5 && !potteryObj.cracked) {
        potteryObj.price = 40
        toSellArray.push(potteryObj)
     } else if(potteryObj.weight < 6 && !potteryObj.cracked) {
        potteryObj.price = 20
        toSellArray.push(potteryObj)
    }

    return potteryObj

    
}