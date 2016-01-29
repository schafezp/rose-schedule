describe('Rose Schedule Directives',function(){


    describe('directive: listAssignments',function(){
      //load module that contains the directives  
      beforeEach(module('schedule','src/views/listAssignments.html'));

        //load the templates
      //beforeEach(module('src/views/listAssignments.html'));

      var $compile, $scope, element;

      beforeEach(inject( function( _$compile_,_$rootScope_){
          $compile = _$compile_;
          $scope = _$rootScope_.$new();



          element = angular.element("<list-assignments assignments='labs' assignmenttype='lab'></list-assignments>");
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
          $compile(element)($scope);
          $scope.$digest();
        }));

        it('Should load and capitalize the assignment type',function(){
            //var rows = element.find('tr');

            var header = element.find('th');
            expect(header.eq(0).text()).toEqual('Lab');
            console.log(element);
        });

        // it('Should display the assignments',function(){
        //     //var links = element.find('a');
        //     //expect(links.eq(0).text()).toEqual('Lab 1');
        // });


    });
});