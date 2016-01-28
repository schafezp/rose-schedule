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
        var res = [];
        self.sessions.forEach(function (element, index, array) {
                if (element.sessionNumber == sessionNumber) {
                    res.push(element.sessionDate);
                }
            }
        );
        return res[0];
    };
    //self.getKeyPair = function(keyPairObj){
    //    var keys = [];
    //    var values = [];
    //    for(var key in keyPairObj){
    //        if(keyPairObj.hasOwnProperty(key)){
    //            keys.push(key);
    //            values.push(keyPairObj[key]);
    //        }
    //    }
    //    return [keys,values];
    //};
    //self.get_Keys = function(keyPairObj){
    //    return self.getKeyPair(keyPairObj)[0];
    //};
    //self.getValues = function(keyPairObj){
    //    return self.getKeyPair(keyPairObj)[1];
    //};

    //part of the schedule JSON now
    //self.scheduleComponentNames = ["Due", "Topics", "Resources", "Reading", "Programs"];
});

