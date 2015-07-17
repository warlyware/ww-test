'use strict';

angular.module('thor')
.controller('UsersCtrl', function($scope, $state, User){
  $scope.name = $state.current.name.split('.')[1];
  var login = $scope.name === 'login';
  function goHome(){
    $state.go('home');
  }
  function hndlErr(err){
    console.log(err);
  }
  function which(user){
    return login ? User.login(user) : User.register(user);
  }
  $scope.submit = function(user){
    which(user)
    .then(function(){
      login ? goHome() : $state.go('user.login');
    }).catch(function(err){
      hndlErr(err);
    });
  };
  
  $scope.oauth = function(provider){
    User.oauth(provider)
    .then(function(){
      goHome();
    }).catch(function(err){
      hndlErr(err);
    });
  };
});
