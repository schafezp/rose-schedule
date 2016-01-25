describe('Unit: ScheduleController',function(){
    beforeEach(module('schedule'));
    var ctrl,scope, scheduleServiceFake;
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        scheduleServiceFake = {

        };
        ctrl = $controller('ScheduleCtrl',{
            $scope: scope
        });
    }))
    describe('ScheduleCtrl',function(){
        it('Should not throw any errors',function(){

        });
    });
})