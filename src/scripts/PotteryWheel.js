let potteryId = 0
export const makePottery = (shape, weight, height) => {
    const potteryObj = {
        shape: shape,
        weight: weight,
        height: height,
        id: potteryId,
    }
    potteryId++
    return  potteryObj
}