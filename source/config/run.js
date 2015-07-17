'use strict';

angular.module('thor')
.run(function(FBService){
  FBService.init();
  console.log('Thor Online');
});
