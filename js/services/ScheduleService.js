app.service('ScheduleService', function ($http) {
    var self = this;
    self.saveSessions = function () {
        $http.get('json/schedule.json').success (function (data) {
            self.scheduleSessions = data.sessions;
            self.className = "CSSE 490";
            //Now included in the schedule JSON
            self.scheduleComponentNames = data.scheduleComponentNames;
            self.homework = data.homework;
            //TODO: add homework
        })
    }
    self.getSessionDate = function (sessionNumber) {
        //return self.scheduleSessions;
        var res = []
        self.scheduleSessions.forEach(function (element, index, array) {
                //res.push(element.sessionDate);
                //res.push(element.sessionNumber);
                if (element.sessionNumber == sessionNumber) {
                    res.push(element.sessionDate);
                    //return sessionNumber.sessionDate;
                    //res.push(element.sessionDate);
                }
            }
        )
        return res[0];
    }

    //part of the schedule JSON now
    //self.scheduleComponentNames = ["Due", "Topics", "Resources", "Reading", "Programs"];
})

