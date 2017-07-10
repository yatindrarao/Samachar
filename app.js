angular.module('flapperNews', [])
.factory('posts', [function(){
  // service body
  var o = {
    posts: []
  };
  return o;
}])
.controller('MainCtrl', [
  '$scope', 'posts',
  function($scope, posts){
    $scope.test = 'Hello world!';
    $scope.posts = posts.posts;

    $scope.addPost = function(){
      if (!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    }
    $scope.increamentUpvotes = function(post){
      console.log(post.title);
      post.upvotes += 1;
    }
  }
]);
