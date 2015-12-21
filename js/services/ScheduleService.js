app.service('ScheduleService', function ($http) {
    var self = this;
    self.saveSessions = function () {
        this.scheduleSessions = null;
        $http.get('json/schedule.json').success (function (data) {
            self.scheduleSessions = data.sessions;
            self.className = "CSSE 490";
            //Now included in the schedule JSON
            self.scheduleComponentNames = data.scheduleComponentNames;
        })
    }
    //part of the schedule JSON now
    //self.scheduleComponentNames = ["Due", "Topics", "Resources", "Reading", "Programs"];
})

