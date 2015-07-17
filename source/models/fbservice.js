'use strict';

angular.module('thor')
.service('FBService', function($window, $firebaseAuth, urls, $rootScope){
  this.init = function(){
    this.fbRef = new $window.Firebase(urls.firebaseUrl);
    this.afAuth = $firebaseAuth(this.fbRef);
    this.afAuth.$onAuth(function(data){
      $rootScope.activeUser = data;
      console.log('data from svc', data);
    });
  };
  this.findUsername = function(data){
    switch(data.provider){
      case 'password':
        return data.password.email;
      case 'twitter':
        return data.twitter.username;
      case 'google':
        return data.google.displayName;
      case 'facebook':
        return data.facebook.displayName;
      case 'github':
        return data.github.displayName;
    }
  };
});
