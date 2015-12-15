app.controller('MainController', ['$scope', '$sce', function ($scope, $sce) {
    /*
     This method allows for html to be injected into an html page to be interpreted as html. This allows for links to be interpreted from raw html.
     Solution found here: http://stackoverflow.com/questions/19415394/with-ng-bind-html-unsafe-removed-how-do-i-inject-html
     */
    $scope.to_trusted = function (html_code) {
        return $sce.trustAsHtml(html_code);
    }
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
    ]
    var dateFormat = function (someDate) {
        var month = someDate.getMonth() + 1;
        var year = someDate.getYear() + 1900;
        return month + "/" + someDate.getDate() + "/" + year;
    }
    for (var i = 0; i < 30; i++) {
        var firstSched = $scope.scheduleSessions[i];
        var newsession = JSON.parse(JSON.stringify(firstSched));
        var nextDay = new Date(newsession.sessionDate);
        nextDay.setDate(nextDay.getDate() + 1);
        nextDay = dateFormat(nextDay);
        newsession.sessionDate = nextDay;
        newsession.session = firstSched.session + 1;
        $scope.scheduleSessions.push(newsession);
    }


//$scope.scheduleSessions = [
//        {
//            week: 1, // value comes from a session object
//            session: 1, // value comes from a session object
//            sessionDate: 'Wednesday Dec 2', // value comes from a session object
//            scheduleComponents: [
//                {
//                    name: "Topics",
//                    values: [
//                        "Review of course syllabus",
//                        "Brief introduction to Express.js",
//                        "MongoDB installation",
//                        "Getting started with MongoDB"
//                    ]
//                },
//                {
//                    name: "Resources",
//                    values: [
//                        '<a href="../Slides/Introductions.pdf">Slides</a>',
//                        '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
//                        '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
//                    ]
//                },
//                {
//                    name: "Reading",
//                    values: [
//                        '<a href="../syllabus.html">Course Syllabus</a>',
//                        '<a href="https://docs.mongodb.org/manual/">MongoDB Documentation</a>',
//                        ' <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">JavaScript Primer</a>',
//                        '<a href="../Assignments/HelloWorldExpressExample.pdf">Hello World Express Exampla</a>',
//                        '<a href="../Assignments/GettingStartedWithMongoDB.pdf">Getting Started with MongoDB</a>'
//                    ]
//                }
//            ]
//        }
//        ,
//        {
//            week: 1, // value comes from a session object
//            session: 2, // value comes from a session object
//            sessionDate: 'Wednesday Dec 3', // value comes from a session object
//            scheduleComponents: [
//                {
//                    name: "Topics",
//                    values: [
//                        "Review of course syllabus",
//                        "Brief introduction to Express.js",
//                        "MongoDB installation",
//                        "Getting started with MongoDB"
//                    ]
//                },
//                {
//                    name: "Resources",
//                    values: [
//                        '<a href="../Slides/Introductions.pdf">Slides</a>',
//                        '<a href="http://expressjs.com/starter/installing.html">Express Installation</a>',
//                        '<a href="https://docs.mongodb.org/manual/installation/">MongoDB installation</a>'
//                    ]
//                },
//                {
//                    name: "Reading",
//                    values: [
//                        '<a href="../syllabus.html">Course Syllabus</a>',
//                        '<a href="https://docs.mongodb.org/manual/">MongoDB Documentation</a>',
//                        ' <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript">JavaScript Primer</a>',
//                        '<a href="../Assignments/HelloWorldExpressExample.pdf">Hello World Express Exampla</a>',
//                        '<a href="../Assignments/GettingStartedWithMongoDB.pdf">Getting Started with MongoDB</a>'
//                    ]
//                }
//            ]
//        }
//    ];
    $scope.myname = "my name"
}]);