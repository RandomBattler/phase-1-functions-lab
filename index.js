// Code your solution in this file!
function distanceFromHqInBlocks(num){
    return Math.abs(42 - num);
}

function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(start, dest){
    return Math.abs(start - dest) * 264;
}

function calculatesFarePrice(start, dest){
    let dist = distanceTravelledInFeet(start, dest);

    if (dist <=400)
        return 0;
    
    if (dist <= 2000)
        return (dist - 400) * 0.02;

    if (dist <= 2500)
        return 25;

    return 'cannot travel that far';
}