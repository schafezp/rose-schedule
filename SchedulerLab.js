function Schedule(configObject)
{
    
    var sessionDays = configObject.sessionDays; // possible vals MTWRFSU
    this.startDate = configObject.startDate;
    var week = configObject.startWeekNumber - 1;

    this.numberOfSessions = configObject.numberOfSessions;
    this.sessions = [];

    var sessionNum = 1;
    var days = { "M":"Monday", "T":"Tuesday","W":"Wednesday", "R":"Thursday","F":"Friday", "S":"Saturday", "U":"Sunday"};
    var date_codes = [ "U", "M", "T", "W", "R", "F", "S"];//date.getDay returns 0-6, 0=sunday
    var weekday;
    var d = new Date(this.startDate);
    //Break Days calculation
    var date2 = new Date(configObject.breakStartDate);
    var date1 = new Date(configObject.resumeDate);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var breakDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log(breakDays);
    //
    var classDate;
    for (var i = 0 ; i < this.numberOfSessions; i++) 
    {
        weekday = days[sessionDays[i % sessionDays.length]]; // Ex: days["M"] -> "Monday"
        // Is date on a class day? ADVANCE until it is. 
        while (days[date_codes[d.getDay()]] != weekday) // days[date_codes[0]] -> days["U"] -> "Sunday"
        {
            d.setTime( d.getTime() + 86400000 );
        }
        //Break calculations
        var td1 = d.getTime() - date2.getTime(); // if + , current date greater than BreakStartDate
        var td2 = d.getTime() - date1.getTime(); // if +, current date greater than ResumeDate
        // If we are on break, warp to the end of break. 
        if (td1 >= 0 && td2 <= 0)
        {
            d.setTime( d.getTime() + breakDays * 86400000 );
        }
        
        if ((i% sessionDays.length) === 0) //This is why we start at week "startweek - 1"
        {
            week++;
        }
    
        classDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();

        var currentSession = new Object();
        currentSession.sessionNumber = sessionNum;
        currentSession.sessionWeekDay = weekday;
        currentSession.sessionDate = classDate;
        currentSession.week = week;        
        this.sessions.push( currentSession);
        
        //Advance one day - end of the loop:
        d.setTime( d.getTime() + 86400000 );


        sessionNum++;
    }
    
   // this.sessions
    
}


var sampleConfigObject = {
"sessionDays": "MWR", // possible values MTWRFSU
"startDate": "11/30/2015",
"startWeekNumber": 1, // possible values are 0 and 1
"breakStartDate": "12/21/2015", // first day without meeting
"resumeDate": "1/4/2016", // first day back in session
"numberOfSessions": 30
};

var schedule = new Schedule(sampleConfigObject);
console.log(schedule);