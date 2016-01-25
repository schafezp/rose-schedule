describe('Unit: ScheduleController',function(){
    beforeEach(module('schedule'));
    var ctrl,scope;
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();

        ctrl = $controller('ScheduleCtrl',{
            $scope: scope
        });
    }))
    describe('ScheduleCtrl',function(){
        it('Should not throw any errors',function(){

        });
    });
})