let potteryId = 1
export const makePottery = (shape, weight, height) => {
    const potteryObj = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryId++,
    }
    
    return  potteryObj
}