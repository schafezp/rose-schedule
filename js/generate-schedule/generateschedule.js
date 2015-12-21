// This file the Session constructor, and the Schedule Constructor
//this  file reads from ./currentconfig.txt and writes to ./currentschedule.txt
"use strict";
var fs = require('fs');


function Session(sessionNumber, sessionWeekDay, sessionDate, week, scheduleComponentNames) {
    var returnSession = {};
    returnSession.sessionNumber = sessionNumber;
    returnSession.sessionWeekDay = sessionWeekDay;
    returnSession.sessionDate = sessionDate;
    returnSession.week = week;
    //todo. 
    returnSession.scheduleComponents = [];
    for (var i =0; i <scheduleComponentNames.length; i++) {
        returnSession.scheduleComponents.push(writeScheduleComponent(scheduleComponentNames[i]));   
    };
    // ScheduleComponent returns each item below individually
    /*
    returnSession.scheduleComponents = [
        {
            name: "Topics",
            values: [
                "Review of course syllabus",
                "Brief introduction to Express.js",
                "MongoDB installation",
                "Getting started with MongoDB"
            ]
        },
        {
            name: "Resources",
            values: [
                //'<a href="../Slides/Introductions.pdf">Slides</a>',
                '<a href="http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf">Intro Slides</a>',
                '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
            ]
        },
        {
            name: "Reading",
            values: [
                '<a href="./syllabus.html">Course Syllabus</a>',
                '<a href="https://docs.mongodb.org/manual/">MongoDB Documentation</a>',
                ' <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">JavaScript Primer</a>',
                //'<a href="../Assignments/HelloWorldExpressExample.pdf">Hello World Express Exampla</a>',
                '<a href="http://lmgtfy.com/?q=Getting+Started+with+MongoDB/">Getting Started with MongoDB</a>'
            ]
        }
    ];
    */

    return returnSession;
}
function Schedule(configObj) {
    // update internal values
    var returnSchedule = {};
    //didn't want to type long things everywhere
    var cnames = configObj.scheduleComponentNames;
    returnSchedule.scheduleComponentNames = cnames;

    var weekdayNumberToWord = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday"
    };
    var currentDay, currentWeekNumber;
    returnSchedule.startDate = configObj.startDate;
    returnSchedule.numberOfSessions = configObj.numberOfSessions;
    var startDateDate = new Date(configObj.startDate);
    // sort list just in case people entered dates in the wrong order.
    if (weekdayNumberToWord[startDateDate.getDay()] === undefined) {
        //console.log("Start date is not valid")
    } else {
        //console.log("Start date is valid")
    }
    currentDay = startDateDate;
    currentWeekNumber = configObj.startWeekNumber;
    returnSchedule.sessions = [];
    for (var dayOfSession = 1; dayOfSession <= configObj.numberOfSessions; dayOfSession++) {
        var currentSession = new Session(dayOfSession, weekdayNumberToWord[currentDay.getDay()], dateFormat(currentDay), currentWeekNumber, cnames);
        returnSchedule.sessions.push(currentSession);
        var dateObj = getNextSessionDate(currentDay, configObj.sessionDays, currentWeekNumber, configObj.breakStartDate, configObj.resumeDate);
        //console.log(dateObj)
        currentWeekNumber = dateObj.weekNumber;
        currentDay = dateObj.nextDate;

    }
    
    return returnSchedule;
}
/*
    Returns a schedule component and populates it accordingly
    Note that this is a generic populator, and it doesn't do anthing too fancy

*/
function writeScheduleComponent(componentCategory){
    var returnComponent = {};
    returnComponent.name = componentCategory;
    switch(componentCategory){
        case "Topics":
            returnComponent.values =[
                "Review of course syllabus",
                "Brief introduction to Express.js",
                "MongoDB installation",
                "Getting started with MongoDB"
            ];
            break;
        case "Resources":
            returnComponent.values =[
                //'<a href="../Slides/Introductions.pdf">Slides</a>',
                '<a href="http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf">Intro Slides</a>',
                '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
            ];
            break;
        case "Reading":
            returnComponent.values = [
                '<a href="./syllabus.html">Course Syllabus</a>',
                '<a href="https://docs.mongodb.org/manual/">MongoDB Documentation</a>',
                ' <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">JavaScript Primer</a>',
                //'<a href="../Assignments/HelloWorldExpressExample.pdf">Hello World Express Exampla</a>',
                '<a href="http://lmgtfy.com/?q=Getting+Started+with+MongoDB/">Getting Started with MongoDB</a>'
            ];
            break;

        default:
            returnComponent.values = [];

    }
    return returnComponent;
}

var dateFormat = function (someDate) {
    var month = someDate.getMonth() + 1;
    var year = someDate.getYear() + 1900;
    return month + "/" + someDate.getDate() + "/" + year;
};

var isOnBreak = function (currentDate, breakStart, breakEnd) {
    var breakStartDate = new Date(breakStart);
    var breakEndDate = new Date(breakEnd);
    return (breakStartDate <= currentDate) && (currentDate < breakEndDate);
};
var getNextSessionDate = function (currentSessionDate, sessionDays, currentWeekNumber, breakStart, breakEnd) {
    //console.log("Call getNextSessionDate");
    var weekdayLetterToNumber = {"U": 0, "M": 1, "T": 2, "W": 3, "R": 4, "F": 5, "S": 6};
    var sessionDaysArr = [];
    for (var index = 0; index < sessionDays.length; index++) {
        //console.log(weekdayLetterToNumber);

        //Extract the days
        var weekdayNumber = weekdayLetterToNumber[sessionDays[index]];
        if (weekdayNumber === undefined) {
            console.log("Invalid session day in config.");
            return;
        }
        sessionDaysArr.push(weekdayNumber);
    }
    if (sessionDaysArr.length === 0) {
        //console.log("No dates selected");
    }
    currentSessionDate.setDate(currentSessionDate.getDate() + 1);
    // loop until currentSessionDate is next valid day.
    // handle break starting.
    var IsNextWeek = false;
    var weekindex = sessionDaysArr.indexOf(currentSessionDate.getDay());
    while (weekindex == -1 || isOnBreak(currentSessionDate, breakStart, breakEnd)) {
        //console.log("while loop runs");
        if (currentSessionDate.getDay() === 0) {
            IsNextWeek = true;
        }
        currentSessionDate.setDate(currentSessionDate.getDate() + 1);
        weekindex = sessionDaysArr.indexOf(currentSessionDate.getDay());

    }
    var returnobj = {};
    returnobj.nextDate = currentSessionDate;
    returnobj.weekNumber = IsNextWeek ? currentWeekNumber + 1 :
        currentWeekNumber;

    return returnobj;

};

var writeToCurrentSchedule = function (scheduleObject) {
    fs.writeFile("../../json/schedule.json", JSON.stringify(scheduleObject, null, 2), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("New schedule object saved")
    });
};
var importConfig = JSON.parse(fs.readFileSync('currentconfig.json', 'utf8'));
var updatedSchedule = new Schedule(importConfig);
writeToCurrentSchedule(updatedSchedule);
