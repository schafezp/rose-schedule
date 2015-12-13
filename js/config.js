// This file has the Config constructor, the Session constructor, and the Schedule Constructor
"use strict";
function Config(sessionDays, startDate, startWeekNumber, breakStartDate, resumeDate, numberOfSessions){
    var returnConfig = {};
    returnConfig.sessionDays = sessionDays;
    returnConfig.startDate = startDate;
    returnConfig.startWeekNumber = startWeekNumber;
    returnConfig.breakStartDate = breakStartDate;
    returnConfig.resumeDate = resumeDate;
    returnConfig.numberOfSessions = numberOfSessions;
    return returnConfig;
}
function Session(sessionNumber,sessionWeekDay,sessionDate,week){
    var returnSession = {};
    returnSession.sessionNumber = sessionNumber;
    returnSession.sessionWeekDay = sessionWeekDay;
    returnSession.sessionDate = sessionDate;
    returnSession.week = week;
    return returnSession;
}
function Schedule(configObj){
    // update internal values
    var weekdayNumberToWord= {0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};
    var currentDay, currentWeekNumber;
    this.startDate = configObj.startDate;
    this.numberOfSessions = configObj.numberOfSessions;
    var startDateDate = new Date(this.startDate);
    this.sessionDays = configObj.sessionDays;
        // sort list just in case people entered dates in the wrong order.
    if(weekdayNumberToWord[startDateDate.getDay()] == undefined){
        //console.log("Start date is not valid")
    } else{
        //console.log("Start date is valid")
    }
    currentDay = startDateDate;
    currentWeekNumber = configObj.startWeekNumber;
    this.sessions = [];
    for(var dayOfSession = 1; dayOfSession <= this.numberOfSessions ; dayOfSession++){
        var currentSession = new Session(dayOfSession, weekdayNumberToWord[currentDay.getDay()],dateFormat(currentDay),currentWeekNumber)
        this.sessions.push(currentSession);
        var dateObj= getNextSessionDate(currentDay,this.sessionDays,currentWeekNumber,configObj.breakStartDate, configObj.resumeDate );
        //console.log(dateObj)
        currentWeekNumber = dateObj.weekNumber;
        currentDay = dateObj.nextDate;
    }
    }


var dateFormat = function(someDate){
    var month = someDate.getMonth() +1;
    var year = someDate.getYear() + 1900;
    return month + "/" + someDate.getDate() + "/" + year;
}
var isOnBreak = function(currentDate, breakStart, breakEnd){
    var breakStartDate = new Date(breakStart);
    var breakEndDate = new Date(breakEnd);
    return (breakStartDate <= currentDate) && (currentDate < breakEndDate);
}
var getNextSessionDate = function(currentSessionDate, sessionDays, currentWeekNumber, breakStart, breakEnd){
    //console.log("Call getNextSessionDate");
    var weekdayLetterToNumber = {"U":0,"M":1,"T":2,"W":3,"R":4,"F":5,"S":6};
    var sessionDaysArr = [];
    for(var index=0 ; index<sessionDays.length; index++){
        //console.log(weekdayLetterToNumber);

        //Extract the days
        var weekdayNumber= weekdayLetterToNumber[sessionDays[index]];
        if(weekdayNumber== undefined){
            console.log("Invalid session day in config.");
            return;
        }
        sessionDaysArr.push(weekdayNumber)
    }
    if(sessionDaysArr.length==0){
        //console.log("No dates selected");
    }
    currentSessionDate.setDate(currentSessionDate.getDate() + 1);
    // loop until currentSessionDate is next valid day.
    // handle break starting.
    var IsNextWeek = false;
    var weekindex = sessionDaysArr.indexOf(currentSessionDate.getDay());
    while(weekindex == -1 || isOnBreak(currentSessionDate, breakStart,breakEnd)){
        //console.log("while loop runs");
        if(currentSessionDate.getDay() == 0){
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

    }


var todayconfig= new Config("MFR","12/7/2015",1,"12/21/2015","1/4/2016",30);
var todaysched = new Schedule(todayconfig);
//console.log(todaysched);

//Here is chosen input from the lab
var testconfig = new Config("MWR","11/30/2015",1,"12/21/2015","1/4/2016",30);
var testsched = new Schedule(testconfig);



console.log(testsched);
