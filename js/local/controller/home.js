app.controller('HomeCtrl', function ($scope, $state, PeopleSvc, $rootScope) {
	$rootScope.app = {isLoading: false};
	$scope.data;
	var count;
	$scope.init = function(){
		$rootScope.app.isLoading = true;
		count = 0;
		PeopleSvc.get().then(function(res){
			count++;
			$scope.data = res.data.results[0];
			resolveFilms($scope.data);
			console.log(res.data);
		}, function(err){
			alert("Koneksi bermasalah");
			count++;
		})
	}

	function resolveFilms(data){
		data.detailFilms = [];
		for(var i=0; i<data.films.length; i++){
			getDetailFilm(i, data.films[i]);
		}
	}

	function getDetailFilm(index, url){
		PeopleSvc.getDetail(url).then(function(res){
			count++;
			$scope.data.detailFilms[index] = res.data;
			resolveLoading();
		}, function(err){
			alert("Koneksi bermasalah");
			count++;
			resolveLoading();
		})
	}

	function resolveLoading(){
		var toStop = $scope.data.films.length + 1;
		if(count == toStop){
			$scope.app.isLoading = false;
		}
	}

	$scope.init();

});