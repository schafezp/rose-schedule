describe('Rose Schedule Directives',function(){

    beforeEach(angular.mock.module('schedule'));
    
    describe('template',function(){
      //load module that contains the directives  
      

        //load the templates
      //beforeEach(module('src/views/listAssignments.html'));

      var $compile, $scope, $httpBackend;

      //Load the templates module
      beforeEach(module('templates'));

      beforeEach(inject( function( _$compile_,_$rootScope_, _$httpBackend_){
          $compile = _$compile_;
          $scope = _$rootScope_.$new();
          $httpBackend = _$httpBackend_;

      } ));

      it("should render the labs as passed in by $scope", inject(function(){
        
        //Do not respond to 'schedule' module request for Schedule.json
        $httpBackend.whenGET('src/json/schedule.json').respond("");


        var template = $compile("<list-assignments assignments='labs' assignmenttype='lab'></list-assignments>")($scope);
        $scope.labs = [
            {
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
            }
          ];
          $scope.lab = "lab";

          $scope.$digest();

          //Render the template as a string. 
          var templateAsHtml = template.html();

          //Verify that the $scope variables are in the template. 
          var capitalizedAssignmentType = $scope.lab.charAt(0).toUpperCase() + $scope.lab.substr(1).toLowerCase();
          expect(templateAsHtml).toContain($scope.lab);

      }));

          
    

    });
});