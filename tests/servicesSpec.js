describe('Unit: ScheduleService',function(){
    var scope,ScheduleService,httpBackend,scheduleFake;
    beforeEach(module('schedule'));
    beforeEach(inject(function(_ScheduleService_,$httpBackend){
        ScheduleService = _ScheduleService_;
        httpBackend = $httpBackend;
        httpBackend.when('GET','src/json/schedule.json').respond(scheduleFake);
        scheduleFake = {
            courseComponents: [
                {
                    type: "homework",
                    session: "1",
                    name: "Homework 1",
                    number: 1,
                    sessionDue: 3,
                    url: "homework-1.html",
                    solution: "",
                    sample: ""
                },
                {
                    type: "homework",
                    session: "2",
                    name: "Homework 2",
                    number: 2,
                    sessionDue: 4,
                    url: "homework-2.html",
                    solution: "",
                    sample: ""
                },
                {
                    type: "lab",
                    session: "1",
                    name: "Lab 1",
                    number: 1,
                    sessionDue: 3,
                    url: "lab-1.html",
                    solution: "",
                    sample: ""
                },
                {
                    type: "lab",
                    session: "2",
                    name: "Lab 2",
                    number: 2,
                    sessionDue: 6,
                    url: "lab-2.html",
                    solution: "",
                    sample: ""
                },
                {
                    type: "lab",
                    session: "3",
                    name: "Lab 3",
                    number: 3,
                    sessionDue: 9,
                    url: "lab-3.html",
                    solution: "",
                    sample: ""
                },
            ],
            className: "CSSE 490",
            scheduleComponentNames: [
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
        

    }));
    
    it('should exist and have a saveSessions method', function () {
        expect(ScheduleService).toBeDefined();
        expect(ScheduleService.saveSessions).toBeDefined();
    });
    it('should load the data',function(){
        ScheduleService.saveSessions();
        httpBackend.flush();
        //all it's properties should be defined
        expect(ScheduleService.schedule).toBeDefined();
        expect(ScheduleService.schedule.sessions).toBeDefined();
        expect(ScheduleService.sessions).toBeDefined();
        expect(ScheduleService.className).toBeDefined();
        expect(ScheduleService.componentNames).toBeDefined();
        expect(ScheduleService.homework).toBeDefined();
        expect(ScheduleService.labs).toBeDefined();

        expect(ScheduleService.sessions.length).toEqual(1);
        expect(ScheduleService.labs.length).toEqual(3);
        expect(ScheduleService.homework.length).toEqual(2);
    });
    it('should get session dates from session numbers',function(){
        ScheduleService.saveSessions();
        httpBackend.flush();
        expect(ScheduleService.getSessionDate(1)).toEqual('11/30/2015');
    });
});
