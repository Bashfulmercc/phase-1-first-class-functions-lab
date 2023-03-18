const returnFirstTwoDrivers= function (drivers){return drivers.slice (0,2)}
    
const returnLastTwoDrivers= function (drivers){return drivers.slice (-2)}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function fareMultiplier(x){return multiplier * x}
}
const fareDoubler= createFareMultiplier(2)

const fareTripler= createFareMultiplier(3)

function selectDifferentDrivers(drivers, pickdrivers){
    return pickdrivers(drivers)
}




