app.factory('PeopleSvc', function ($http) {
    return { 
        get: function(){
            var url = "https://swapi.co/api/people/";
            return $http.get(url);
        },
        getDetail: function(url){
        	return $http.get(url);
        }
    };
});