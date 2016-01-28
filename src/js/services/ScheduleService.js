app.service('ScheduleService', function ($http) {
    var self = this;
    self.saveSessions = function () {
        $http.get('src/json/schedule.json').success (function (data) {

            self.schedule = data;
            self.sessions = self.schedule.sessions;
            self.className = "CSSE 490";
            //Now included in the schedule JSON

            self.componentNames = data.scheduleComponentNames;

            self.courseComponents = data.courseComponents;
            self.homework = [];
            self.labs = [];

            self.courseComponents.forEach(function (element, index, array) {
                if (element.type == "homework") {
                    self.homework.push(element);
                } else if (element.type == "lab") {
                    self.labs.push(element);
                }
            });
        })

    };
    self.getSessionDate = function (sessionNumber) {
        //return self.scheduleSessions;
        var res = [];
        self.sessions.forEach(function (element, index, array) {
                //res.push(element.sessionDate);
                //res.push(element.sessionNumber);
                if (element.sessionNumber == sessionNumber) {
                    res.push(element.sessionDate);
                    //return sessionNumber.sessionDate;
                    //res.push(element.sessionDate);
                }
            }
        );
        return res[0];
    };

    //part of the schedule JSON now
    //self.scheduleComponentNames = ["Due", "Topics", "Resources", "Reading", "Programs"];
});

