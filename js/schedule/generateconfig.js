var fs = require('fs');
function Config(sessionDays, startDate, startWeekNumber, breakStartDate, resumeDate, numberOfSessions) {
    var returnConfig = {};
    returnConfig.sessionDays = sessionDays;
    returnConfig.startDate = startDate;
    returnConfig.startWeekNumber = startWeekNumber;
    returnConfig.breakStartDate = breakStartDate;
    returnConfig.resumeDate = resumeDate;
    returnConfig.numberOfSessions = numberOfSessions;

    return returnConfig;
}

// Create your desired configuration object here.
var updatedConfig = new Config("MWR", "11/30/2015", 1, "12/21/2015", "1/4/2016", 30);

/*
 TODO: functionally duplicate code exists in generateschedule.js
 This should be merged into one function and shared somehow.
 */

var writeToCurrentConfig = function (configObject) {
    fs.writeFile("currentconfig.json", JSON.stringify(configObject), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("New configuration object saved")
    })
};
writeToCurrentConfig(updatedConfig);