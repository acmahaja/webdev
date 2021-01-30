let userData = {};
let dataElement = {
    timeStamp: NaN,
    weightMeasured: NaN
}

for (let i = 0; i < 30; i++) {
    dataElement = { timeStamp: NaN, weightMeasured: NaN };
    var date = new Date(Date.now());
    var hour = 8 + Math.random() * (22 - 8);
    dataElement.timeStamp = date;
    dataElement.weightMeasured = ((1 - Math.random() * .25) + .5) * 80;
    date.setUTCDate(i)
    date.setHours(hour);
    userData[i] = dataElement;
}