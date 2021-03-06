app.filter('capitalize', function() {
    //http://stackoverflow.com/questions/30207272/capitalize-the-first-letter-of-string-in-angularjs
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
});
