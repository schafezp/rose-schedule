app.controller('MainController', ['$scope', function ($scope) {
    $scope.name = "Test name";
    $scope.scheduleComponentNames = ["Due", "Topics", "Resources", "Reading", "Programs"];
    $scope.scheduleSessions = [
        {
            week: 1, // value comes from a session object
            session: 1, // value comes from a session object
            sessionDate: 'Wednesday Dec 2', // value comes from a session object
            scheduleComponents: [
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
                        '<a href="../Slides/Introductions.pdf">Slides</a>',
                        '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                        '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
                    ]
                },
                {
                    name: "Reading",
                    values: [
                        '<a href="../syllabus.html">Course Syllabus</a>',
                        '<a href="https://docs.mongodb.org/manual/">MongoDB Documentation</a>',
                        ' <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">JavaScript Primer</a>',
                        '<a href="../Assignments/HelloWorldExpressExample.pdf">Hello World Express Exampla</a>',
                        '<a href="../Assignments/GettingStartedWithMongoDB.pdf">Getting Started with MongoDB</a>'
                    ]
                }
            ]
        }
        ,
        {
            week: 1, // value comes from a session object
            session: 2, // value comes from a session object
            sessionDate: 'Wednesday Dec 3', // value comes from a session object
            scheduleComponents: [
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
                        '<a href="../Slides/Introductions.pdf">Slides</a>',
                        '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
                        '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
                    ]
                },
                {
                    name: "Reading",
                    values: [
                        '<a href="../syllabus.html">Course Syllabus</a>',
                        '<a href="https://docs.mongodb.org/manual/">MongoDB Documentation</a>',
                        ' <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">JavaScript Primer</a>',
                        '<a href="../Assignments/HelloWorldExpressExample.pdf">Hello World Express Exampla</a>',
                        '<a href="../Assignments/GettingStartedWithMongoDB.pdf">Getting Started with MongoDB</a>'
                    ]
                }
            ]
        }
    ];
    $scope.myname = "my name"
}]);