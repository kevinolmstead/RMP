angular.module('list', [])
    .controller('MainCtrl', ['$scope', function($scope){
      $scope.posts = [];

      $scope.addPost = function() {
        $scope.posts.push({
          name: $scope.professorName,
          text: $scope.postEntry
        })
      }
    }])

