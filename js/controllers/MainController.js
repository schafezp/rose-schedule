app.controller('MainController', ['$scope', '$sce', '$http', '$location', '$anchorScroll', function ($scope, $sce, $http, $location, $anchorScroll) {
    /*
     This method allows for html to be injected into an html page to be interpreted as html. This allows for links to be interpreted from raw html.
     Solution found here: http://stackoverflow.com/questions/19415394/with-ng-bind-html-unsafe-removed-how-do-i-inject-html
     */
    $scope.to_trusted = function (html_code) {
        return $sce.trustAsHtml(html_code);
    };
    $scope.linkTo = function (id) {
        $location.url(id);
        e
    };
    $scope.gotoID = function (id) {
        $location.hash(id);
        $anchorScroll();
    };
    $scope.scheduleComponentNames = ["Due", "Topics", "Resources", "Reading", "Programs"];
    $scope.className = "CSSE 490";
/*Hey, Zach! Here's some differences between Generated schedule (pasted here) and example schedule:
    generated schedule starts like this:
        {"startDate":"2015-11-30T05:00:00.000Z","numberOfSessions":30,"sessions":[stuff below]...
    'sessionNumber' is the renamed 'session' variable. 
        All other code (in html) changed to reflect this, because I like it
*/
    $scope.scheduleSessions = [{"sessionNumber":1,"sessionWeekDay":"Monday","sessionDate":"11/30/2015","week":1,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":2,"sessionWeekDay":"Wednesday","sessionDate":"12/2/2015","week":1,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":3,"sessionWeekDay":"Thursday","sessionDate":"12/3/2015","week":1,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":4,"sessionWeekDay":"Monday","sessionDate":"12/7/2015","week":2,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":5,"sessionWeekDay":"Wednesday","sessionDate":"12/9/2015","week":2,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":6,"sessionWeekDay":"Thursday","sessionDate":"12/10/2015","week":2,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":7,"sessionWeekDay":"Monday","sessionDate":"12/14/2015","week":3,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":8,"sessionWeekDay":"Wednesday","sessionDate":"12/16/2015","week":3,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":9,"sessionWeekDay":"Thursday","sessionDate":"12/17/2015","week":3,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":10,"sessionWeekDay":"Monday","sessionDate":"1/4/2016","week":4,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":11,"sessionWeekDay":"Wednesday","sessionDate":"1/6/2016","week":4,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":12,"sessionWeekDay":"Thursday","sessionDate":"1/7/2016","week":4,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":13,"sessionWeekDay":"Monday","sessionDate":"1/11/2016","week":5,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":14,"sessionWeekDay":"Wednesday","sessionDate":"1/13/2016","week":5,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":15,"sessionWeekDay":"Thursday","sessionDate":"1/14/2016","week":5,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":16,"sessionWeekDay":"Monday","sessionDate":"1/18/2016","week":6,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":17,"sessionWeekDay":"Wednesday","sessionDate":"1/20/2016","week":6,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":18,"sessionWeekDay":"Thursday","sessionDate":"1/21/2016","week":6,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":19,"sessionWeekDay":"Monday","sessionDate":"1/25/2016","week":7,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":20,"sessionWeekDay":"Wednesday","sessionDate":"1/27/2016","week":7,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":21,"sessionWeekDay":"Thursday","sessionDate":"1/28/2016","week":7,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":22,"sessionWeekDay":"Monday","sessionDate":"2/1/2016","week":8,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":23,"sessionWeekDay":"Wednesday","sessionDate":"2/3/2016","week":8,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":24,"sessionWeekDay":"Thursday","sessionDate":"2/4/2016","week":8,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":25,"sessionWeekDay":"Monday","sessionDate":"2/8/2016","week":9,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":26,"sessionWeekDay":"Wednesday","sessionDate":"2/10/2016","week":9,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":27,"sessionWeekDay":"Thursday","sessionDate":"2/11/2016","week":9,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":28,"sessionWeekDay":"Monday","sessionDate":"2/15/2016","week":10,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":29,"sessionWeekDay":"Wednesday","sessionDate":"2/17/2016","week":10,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]},{"sessionNumber":30,"sessionWeekDay":"Thursday","sessionDate":"2/18/2016","week":10,"scheduleComponents":[{"name":"Topics","values":["Review of course syllabus","Brief introduction to Express.js","MongoDB installation","Getting started with MongoDB"]},{"name":"Resources","values":["<a href=\"http://www.rose-hulman.edu/class/csse/csse490WebServicesDev/201620/Slides/Introductions.pdf\">Intro Slides</a>","<a href=\"http://expressjs.com/starter/installing.html\">Express Installation</a>","<a href=\"https://docs.mongodb.org/manual/installation/\">MongoDB installation</a>"]},{"name":"Reading","values":["<a href=\"./syllabus.html\">Course Syllabus</a>","<a href=\"https://docs.mongodb.org/manual/\">MongoDB Documentation</a>"," <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript\">JavaScript Primer</a>","<a href=\"http://lmgtfy.com/?q=Getting+Started+with+MongoDB/\">Getting Started with MongoDB</a>"]}]}];
    /*    {
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
    */
    
    //fs doesn't work in angular
    //$scope.scheduleSessions = JSON.parse(fs.readFileSync('../schedule/currentschedule.txt','utf8'));
  /*  var dateFormat = function (someDate) {
        var month = someDate.getMonth() + 1;
        var year = someDate.getYear() + 1900;
        return month + "/" + someDate.getDate() + "/" + year;
    }
  */  
    // for (var i = 0; i < 30; i++) {
    //     var firstSched = $scope.scheduleSessions[i];
    //     var newsession = JSON.parse(JSON.stringify(firstSched));
    //     var nextDay = new Date(newsession.sessionDate);
    //     nextDay.setDate(nextDay.getDate() + 1);
    //     //nextDay = dateFormat(nextDay); 
    //     newsession.sessionDate = nextDay;
    //     newsession.session = firstSched.session + 1;
    //     $scope.scheduleSessions.push(newsession);
    // }
    /*
     $http.get('js/schedule/currentschedule.json').success(function(data){
     $scope.scheduleSessions = data;
     })
     */



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

//var app = angular.module('angularjs-starter', []);
//
//app.config(function($routeProvider) {
//    $routeProvider.when('/test', {
//            controller: 'TestCtrl',
//            templateUrl: 'test.html'
//        })
//        .when('/weee', {
//            controller: 'WeeeCtrl',
//            templateUrl: 'weee.html'
//        });
//});
//
//app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
//    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
//        $location.hash($routeParams.scrollTo);
//        $anchorScroll();
//    });
//})
//
//app.controller('MainCtrl', function($scope, $location, $anchorScroll, $routeParams) {
//    $scope.gotoRow = function(sessionNumber){
//        //$location.hash('session' + rowNumber);
//        console.log("going to row")
//        $location.hash(sessionNumber);
//        $anchorScroll();
//    };
//    $scope.range = function(n) {
//        return new Array(n);
//    };
//});
//
//
//app.controller('TestCtrl', function($scope) {
//});
//
//
//app.controller('WeeeCtrl', function($scope, $location, $anchorScroll, $routeParams) {
//});