var fs = require('fs');
function Config(sessionDays, startDate, startWeekNumber, breakStartDate, resumeDate, numberOfSessions, scheduleComponentNames, courseComponents) {
    var returnConfig = {};
    returnConfig.sessionDays = sessionDays;
    returnConfig.startDate = new Date(startDate);
    returnConfig.startWeekNumber = startWeekNumber;
    returnConfig.breakStartDate = new Date(breakStartDate);
    returnConfig.resumeDate = new Date(resumeDate);
    returnConfig.numberOfSessions = numberOfSessions;
    returnConfig.scheduleComponentNames = scheduleComponentNames;
    returnConfig.courseComponents = courseComponents;
    return returnConfig;
}

// Create your desired configuration object here.
var homework = [
    {
        type: "homework",
        session: "1",
        name: "Homework 1",
        number: 1,
        sessionDue: 3,
        url: "homework-1.html",
        solution: '',
        sample: ''
    },
    {
        type: "homework",
        session: "2",
        name: "Homework 2",
        number: 2,
        sessionDue: 4,
        url: "homework-2.html",
        solution: '',
        sample: '',
    }
];

var courseComponents = [];
courseComponents = courseComponents.concat(homework)
var scheduleComponentNames = ["Due", "Topics", "Resources", "Reading", "Programs", "Whatever"]
var updatedConfig = new Config("MWR", "11/30/2015", 1, "12/21/2015", "1/4/2016", 30, scheduleComponentNames, courseComponents);

var writeToCurrentConfig = function (configObject) {
    fs.writeFile("currentconfig.json", JSON.stringify(configObject), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("New configuration object saved")
    })
};
writeToCurrentConfig(updatedConfig);