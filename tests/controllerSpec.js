describe('Unit: ScheduleController',function(){
    beforeEach(module('schedule'));
    var ctrl,scope, scheduleServiceFake;
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        //I do not think this is how we are supposed to do this...
        scheduleServiceFake = {
            className: "CSSE 490",
            scheduleComponentNames: [
                "Due",
                "Topics",
                "Resources",
                "Reading",
                "Programs"
            ],
            scheduleSessions: [
                {
                    sessionNumber: 1,
                    sessionWeekDay: "Monday",
                    sessionDate: "11/30/2015",
                    week: 1,
                    scheduleComponents: [
                        {
                            name: "Due",
                            values: []
                        },
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
                                "<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>",
                                "<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>",
                                "<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"
                            ]
                        },
                        {
                            name: "Reading",
                            values: [
                                "<a href=\"./syllabus.html\">Course Syllabus</a>",
                                "<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>",
                                " <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>",
                                "<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"
                            ]
                        },
                        {
                            name: "Programs",
                            values: []
                        }
                    ]
                }
            ]
        };
        ctrl = $controller('ScheduleCtrl',{
            $scope: scope,
            ScheduleService: scheduleServiceFake
        });
    }));
    describe('ScheduleCtrl',function(){
        it('should have access to data on scope from scheduleService',function(){
            expect(scope.scheduleSessions).toBeDefined();
            expect(scope.scheduleComponentNames).toBeDefined();
            expect(scope.className).toBeDefined();
        });
    });
});