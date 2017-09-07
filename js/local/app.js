var app = angular.module('App', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
        abstract: true,
        templateUrl: 'tpl/app.html'
    })

    .state('home', {
        url: '/home',
        templateUrl: 'tpl/home.html',
        controller: 'HomeCtrl'
    })  
     

    $urlRouterProvider.otherwise('/home');
});

app.filter('capitalize', function() {
    return function(input, scope) {
    if (input!=undefined){
        input = input.toLowerCase().split(' ');

        for (var i = 0; i < input.length; i++) {
           // You do not need to check if i is larger than input length, as your for does that for you
           // Assign it back to the array
           input[i] = input[i].charAt(0).toUpperCase() + input[i].substring(1);     
        
        }
        return input.join(' '); 
    }
       // Directly return the joined string
       return input;
      }
});

app.controller('MainCtrl', function ($rootScope) {
    $rootScope.app = {isLoading: false};
});
