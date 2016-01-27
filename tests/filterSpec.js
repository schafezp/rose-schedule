describe('Unit: Capitalize filter',function(){
    beforeEach(module('schedule'));
    describe('capitalize',function(){
       beforeEach(inject(function($filter){
           capitalize = $filter('capitalize');
       }));

        it('Should leave capitalized words unchanged',function(){
           expect(capitalize('Test')).toEqual('Test');
            expect(capitalize('Post message')).toEqual('Post message');
        });

        it('Should capitalize uncapitalized words',function(){
           expect(capitalize('test')).toEqual('Test');
            expect(capitalize('this is a test message')).toEqual('This is a test message');
        });
        it('Should leave the empty string empty',function(){
            expect(capitalize('')).toEqual('');
        })

    });
});