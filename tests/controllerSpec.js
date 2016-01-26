describe('Unit: ScheduleController',function(){
    beforeEach(module('schedule'));
    var ctrl,scope, scheduleServiceFake;
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        //I do not think this is how we are supposed to do this...
        scheduleServiceFake = {
            "className": "debugClassName"
        };
        ctrl = $controller('ScheduleCtrl',{
            $scope: scope
        });
    }));
    describe('ScheduleCtrl',function(){
        it('Should initialize it\'s class name',function(){
            expect(ctrl.className).toBe("debugClassName");
        });
    });
});