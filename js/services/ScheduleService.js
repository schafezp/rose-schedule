app.service('ScheduleService', function ($http) {
    var self = this;
    self.saveSessions = function () {
        this.scheduleSessions = null;
        $http.get('json/schedule.json').success (function (data) {
            self.scheduleSessions = data.sessions;
        })
    }
})

