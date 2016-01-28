describe('Unit: ScheduleService',function(){
    var scope,ScheduleService,httpBackend;
    beforeEach(module('schedule'));
    beforeEach(inject(function(_ScheduleService_,$httpBackend){
        ScheduleService = _ScheduleService_;
        httpBackend = $httpBackend;

        //mock behavior of httpBackend
        schedule = {
            className: "CSSE 490",
                componentNames: [
                "Due",
                "Topics",
                "Resources",
                "Reading",
                "Programs"
            ],
                sessions: [
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

        httpBackend.when('GET','src/json/schedule.json').respond(schedule);


    }));
    it('should load schedule service and its methods', function () {
        expect(ScheduleService).toBeDefined();
        expect(ScheduleService.saveSessions).toBeDefined();
    });
    it('Should load the data',function(){
        ScheduleService.saveSessions();
        console.log(ScheduleService);
        expect(ScheduleService.schedule).toBeDefined();
        expect(ScheduleService.className).toBeDefined();
    });
});