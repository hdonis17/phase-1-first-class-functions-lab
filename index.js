const returnFirstTwoDrivers = function(array){
    return array.slice(0,2)
}
returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"])

const returnLastTwoDrivers = function(array) {
    return array.slice(2)
}
returnLastTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer
    }
} createFareMultiplier(5)(5)

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, callback) {
    const drivers = ["Antonia", "Nuru", "Amari", "Mo"]
    return callback(array)
} selectDifferentDrivers(drivers, returnFirstTwoDrivers(array))
selectDifferentDrivers(drivers, returnLastTwoDrivers(array))