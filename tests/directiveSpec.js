describe('Rose Schedule Directives',function(){
   beforeEach(module('schedule'));
    beforeEach(module('src/views/listAssignments.html'));


    var compile, scope, element;

    describe('listAssignments',function(){
       beforeEach(inject(function($compile,$rootScope,$templateCache){
           compile = $compile;
           scope = $rootScope.$new();
           //template = $templateCache.get('src/views/listAssignment.js');
           //$templateCache.put('src/views/listAssignment.js',template);

           assignments = [{
               "type": "lab",
               "session": "1",
               "name": "Lab 1",
               "number": 1,
               "sessionDue": 3,
               "url": "lab-1.html",
               "solution": "",
               "sample": ""
           },
           {
               "type": "lab",
               "session": "2",
               "name": "Lab 2",
               "number": 2,
               "sessionDue": 6,
               "url": "lab-2.html",
               "solution": "",
               "sample": ""
           },
           {
               "type": "lab",
               "session": "3",
               "name": "Lab 3",
               "number": 3,
               "sessionDue": 9,
               "url": "lab-3.html",
               "solution": "",
               "sample": ""
           }];
           assignmenttype = "lab";
           element = angular.element("<list-assignments assignments='labs' assignmenttype='lab'></list-assignments>");
           compile(element)(scope);
           scope.$digest();
       }));
        it('Should not fail',function(){

        });
    });
});